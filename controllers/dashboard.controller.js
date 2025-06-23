const { Op } = require('sequelize');
const { Activity, User, StakingPosition, Order } = require('../db/models');

// Get dashboard stats (user count, staking count, order count, total staked, daily/weekly/monthly growth)
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