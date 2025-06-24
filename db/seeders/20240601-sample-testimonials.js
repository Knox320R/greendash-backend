'use strict';

/**
 * Seeder for testimonials table using sample data from frontend.
 */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('testimonials', [
      {
        name: 'Alice Johnson',
        role: 'GreenDash User',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        quote: 'GreenDash has transformed the way I think about sustainable investments. Earning rewards while supporting eco-friendly initiatives is a game-changer!',
        duration: '6 months',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bob Smith',
        role: 'GreenDash Affiliate',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        quote: 'The affiliate program is fantastic! I\'ve been able to build a network of like-minded individuals and earn commissions while promoting a great cause.',
        duration: '1 year',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Carol Davis',
        role: 'GreenDash Staker',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        quote: 'Staking GREEN tokens is easy and rewarding. I love knowing that my investment is contributing to a more sustainable future.',
        duration: '8 months',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Emma Wilson',
        role: 'Environmental Activist',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        quote: 'As an environmental activist, I\'m thrilled to see a platform that combines financial gains with environmental impact. GreenDash is the future!',
        duration: '3 months',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mike Lee',
        role: 'Gold Staker',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        quote: 'The daily rewards are incredible! I\'ve earned over $2,000 in just 4 months. The platform is user-friendly and the support team is amazing.',
        duration: '4 months',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sarah Garcia',
        role: 'Crypto Investor',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
        quote: 'I\'ve tried many crypto platforms, but GreenDash stands out with its focus on sustainability. The community is supportive and the rewards are consistent.',
        duration: '1.5 years',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ryan Kim',
        role: 'Mobile User',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        quote: 'The mobile app is fantastic! I can check my rewards and manage my staking on the go. GreenDash has made sustainable investing accessible to everyone.',
        duration: '2 months',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lisa Martinez',
        role: 'Financial Advisor',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
        quote: 'As a financial advisor, I recommend GreenDash to my clients. It\'s a perfect blend of traditional investment principles and modern blockchain technology.',
        duration: '6 months',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'David Thompson',
        role: 'Student',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
        quote: 'The educational content on GreenDash is invaluable. I\'ve learned so much about sustainable finance while earning rewards. It\'s a win-win platform!',
        duration: '5 months',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nina Williams',
        role: 'Retired Teacher',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
        quote: 'GreenDash\'s commitment to transparency is outstanding. I can see exactly where my investments are going and the impact they\'re making on the environment.',
        duration: '1 year',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('testimonials', null, {});
  }
}; 