const { Op } = require('sequelize');
const { Activity, User, StakingPosition, Order } = require('../db/models');

/**
 * Create a new activity log entry
 * Example request body:
 * {
 *   "user_id": 2,
 *   "action": "stake_created",
 *   "details": { "amount": 200, "package": "Bronze" }
 * }
 * Sample response:
 * {
 *   "id": 1,
 *   "user_id": 2,
 *   "action": "stake_created",
 *   "details": { "amount": 200, "package": "Bronze" },
 *   "created_at": "2024-06-01T12:00:00Z",
 *   "updated_at": "2024-06-01T12:00:00Z"
 * }
 */
exports.createActivity = async (req, res, next) => {
  try {
    const activity = await Activity.create(req.body);
    res.status(201).json(activity);
  } catch (err) { next(err); }
};

/**
 * Get all activity logs
 * Sample response:
 * [
 *   { "id": 1, "user_id": 2, "action": "stake_created", ... },
 *   { "id": 2, "user_id": 3, "action": "login", ... }
 * ]
 */
exports.getAllActivities = async (req, res, next) => {
  try {
    const activities = await Activity.findAll();
    res.json(activities);
  } catch (err) { next(err); }
};

/**
 * Get a single activity log by ID
 * Sample response:
 * { "id": 1, "user_id": 2, "action": "stake_created", ... }
 */
exports.getActivityById = async (req, res, next) => {
  try {
    const activity = await Activity.findByPk(req.params.id);
    if (!activity) return res.status(404).json({ error: 'Activity not found' });
    res.json(activity);
  } catch (err) { next(err); }
};

/**
 * Update an activity log by ID
 * Example request body:
 * { "action": "stake_completed" }
 * Sample response:
 * { "id": 1, "user_id": 2, "action": "stake_completed", ... }
 */
exports.updateActivity = async (req, res, next) => {
  try {
    const activity = await Activity.findByPk(req.params.id);
    if (!activity) return res.status(404).json({ error: 'Activity not found' });
    await activity.update(req.body);
    res.json(activity);
  } catch (err) { next(err); }
};

/**
 * Delete an activity log by ID
 * Sample response:
 * { "message": "Activity deleted" }
 */
exports.deleteActivity = async (req, res, next) => {
  try {
    const activity = await Activity.findByPk(req.params.id);
    if (!activity) return res.status(404).json({ error: 'Activity not found' });
    await activity.destroy();
    res.json({ message: 'Activity deleted' });
  } catch (err) { next(err); }
};

/**
 * Get dashboard stats: total users, staking positions, orders, total staked, and daily/weekly/monthly growth.
 * Sample response:
 * {
 *   "userCount": 10,
 *   "stakingCount": 5,
 *   "orderCount": 7,
 *   "totalStaked": 3500,
 *   "daily": { "users": 2, "staking": 1, "orders": 1 },
 *   "weekly": { "users": 5, "staking": 3, "orders": 2 },
 *   "monthly": { "users": 10, "staking": 5, "orders": 7 }
 * }
 */
exports.getStats = async (req, res, next) => {
  try {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay()); // Sunday
    startOfWeek.setHours(0, 0, 0, 0);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    // Total counts
    const userCount = await User.count();
    const stakingCount = await StakingPosition.count();
    const orderCount = await Order.count();
    const totalStaked = await StakingPosition.sum('amount') || 0;

    // Daily
    const dailyUsers = await User.count({ where: { created_at: { [Op.gte]: startOfDay } } });
    const dailyStaking = await StakingPosition.count({ where: { created_at: { [Op.gte]: startOfDay } } });
    const dailyOrders = await Order.count({ where: { created_at: { [Op.gte]: startOfDay } } });

    // Weekly
    const weeklyUsers = await User.count({ where: { created_at: { [Op.gte]: startOfWeek } } });
    const weeklyStaking = await StakingPosition.count({ where: { created_at: { [Op.gte]: startOfWeek } } });
    const weeklyOrders = await Order.count({ where: { created_at: { [Op.gte]: startOfWeek } } });

    // Monthly
    const monthlyUsers = await User.count({ where: { created_at: { [Op.gte]: startOfMonth } } });
    const monthlyStaking = await StakingPosition.count({ where: { created_at: { [Op.gte]: startOfMonth } } });
    const monthlyOrders = await Order.count({ where: { created_at: { [Op.gte]: startOfMonth } } });

    res.json({
      userCount,
      stakingCount,
      orderCount,
      totalStaked,
      daily: { users: dailyUsers, staking: dailyStaking, orders: dailyOrders },
      weekly: { users: weeklyUsers, staking: weeklyStaking, orders: weeklyOrders },
      monthly: { users: monthlyUsers, staking: monthlyStaking, orders: monthlyOrders }
    });
  } catch (err) { next(err); }
}; 