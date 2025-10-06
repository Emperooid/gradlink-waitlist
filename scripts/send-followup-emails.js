// scripts/send-followup-emails.js
// Run this script to send follow-up emails to all waitlist members
// Usage: node scripts/send-followup-emails.js

const API_BASE_URL = 'http://localhost:3000'; // Change this to your production URL
const ADMIN_API_KEY = 'your-secure-admin-key-here'; // Should match your .env.local

async function sendFollowUpEmails(emailType = 'followup', customMessage = '') {
  try {
    console.log('🚀 Sending follow-up emails...');
    
    const response = await fetch(`${API_BASE_URL}/api/send-followup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ADMIN_API_KEY}`,
      },
      body: JSON.stringify({
        emailType,
        customMessage,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      console.log('✅ Success!', result.message);
      console.log(`📧 Sent ${result.count} emails`);
    } else {
      console.error('❌ Error:', result.error);
    }
  } catch (error) {
    console.error('❌ Network error:', error);
  }
}

async function getWaitlistStats() {
  try {
    console.log('📊 Fetching waitlist statistics...');
    
    const response = await fetch(`${API_BASE_URL}/api/send-followup`, {
      method: 'GET',
    });

    const stats = await response.json();

    if (response.ok) {
      console.log('✅ Waitlist Statistics:');
      console.log(`👥 Total Members: ${stats.totalMembers}`);
      console.log('📈 Categories:', stats.summary.categories);
      console.log('🌍 Countries:', stats.summary.countries);
    } else {
      console.error('❌ Error:', stats.error);
    }
  } catch (error) {
    console.error('❌ Network error:', error);
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'stats':
    getWaitlistStats();
    break;
  case 'followup':
    sendFollowUpEmails('followup');
    break;
  case 'custom':
    const message = args[1];
    if (!message) {
      console.error('❌ Please provide a custom message: node scripts/send-followup-emails.js custom "Your message here"');
      process.exit(1);
    }
    sendFollowUpEmails('custom', message);
    break;
  default:
    console.log(`
📧 Gradlink Email Management Script

Usage:
  node scripts/send-followup-emails.js stats                    # Get waitlist statistics
  node scripts/send-followup-emails.js followup                # Send follow-up emails
  node scripts/send-followup-emails.js custom "Your message"   # Send custom message

Examples:
  node scripts/send-followup-emails.js stats
  node scripts/send-followup-emails.js followup
  node scripts/send-followup-emails.js custom "Beta launch is coming next week!"
    `);
}
