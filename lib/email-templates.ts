// Email template utilities
export interface EmailTemplateData {
  fullName: string;
  email: string;
  category: string;
  schoolName: string;
  features: string;
  country: string;
  city: string;
}

export const generateWelcomeEmailTemplate = (data: EmailTemplateData): string => {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Gradlink Waitlist</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .logo {
            width: 60px;
            height: 60px;
            background: white;
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: bold;
            color: #667eea;
            margin-bottom: 20px;
        }
        .content {
            padding: 40px 30px;
        }
        .welcome-title {
            font-size: 28px;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
            text-align: center;
        }
        .details-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
            border-left: 4px solid #667eea;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            padding-bottom: 12px;
            border-bottom: 1px solid #e9ecef;
        }
        .detail-row:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
        }
        .detail-label {
            font-weight: 600;
            color: #495057;
        }
        .detail-value {
            color: #667eea;
            font-weight: 500;
        }
        .cta-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            margin: 30px 0;
            border-radius: 8px;
        }
        .cta-button {
            display: inline-block;
            background: white;
            color: #667eea;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            margin-top: 15px;
            transition: all 0.3s ease;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        .feature-item {
            text-align: center;
            padding: 20px;
            border-radius: 8px;
            background: #f8f9fa;
        }
        .feature-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            margin-bottom: 15px;
        }
        .footer {
            background: #343a40;
            color: #adb5bd;
            padding: 30px;
            text-align: center;
            font-size: 14px;
        }
        .social-links {
            margin: 20px 0;
        }
        .social-link {
            display: inline-block;
            margin: 0 10px;
            color: #667eea;
            text-decoration: none;
        }
        @media (max-width: 600px) {
            .container {
                margin: 0;
                border-radius: 0;
            }
            .header, .content, .footer {
                padding: 20px;
            }
            .features-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo">G</div>
            <h1>Welcome to Gradlink!</h1>
            <p>You're officially on the waitlist 🎉</p>
        </div>

        <!-- Main Content -->
        <div class="content">
            <h2 class="welcome-title">Hi ${data.fullName}! 👋</h2>
            
            <p>Thank you for joining the Gradlink waitlist! We're excited to have you as part of our community of forward-thinking students and educators.</p>

            <!-- User Details -->
            <div class="details-card">
                <h3 style="margin-top: 0; color: #667eea;">Your Registration Details</h3>
                <div class="detail-row">
                    <span class="detail-label">📚 Category:</span>
                    <span class="detail-value">${data.category}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">🏫 School:</span>
                    <span class="detail-value">${data.schoolName}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">✨ Interested In:</span>
                    <span class="detail-value">${data.features}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">🌍 Location:</span>
                    <span class="detail-value">${data.city}, ${data.country}</span>
                </div>
            </div>

            <!-- What's Next -->
            <div class="cta-section">
                <h3>What happens next?</h3>
                <p>We're working hard to bring Gradlink to life. As a waitlist member, you'll be among the first to:</p>
                <ul style="text-align: left; max-width: 400px; margin: 20px auto;">
                    <li>Get early access to the platform</li>
                    <li>Receive exclusive updates and sneak peeks</li>
                    <li>Influence features based on your feedback</li>
                    <li>Connect with other early adopters</li>
                </ul>
                <a href="#" class="cta-button">Join Our Community</a>
            </div>

            <!-- Features Preview -->
            <h3 style="text-align: center; color: #667eea; margin: 40px 0 20px 0;">What You Can Expect</h3>
            <div class="features-grid">
                <div class="feature-item">
                    <div class="feature-icon">🤖</div>
                    <h4>AI Study Assistant</h4>
                    <p>Smart summaries and personalized learning paths</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🎮</div>
                    <h4>Gamified Learning</h4>
                    <p>Make studying fun with quizzes and competitions</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🌐</div>
                    <h4>Global Network</h4>
                    <p>Connect with students worldwide</p>
                </div>
            </div>

            <p style="color: #6c757d; font-style: italic; text-align: center; margin-top: 30px;">
                We'll keep you updated every step of the way. Get ready to revolutionize your learning experience!
            </p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p><strong>Gradlink Team</strong></p>
            <p>Building the future of student networking and learning</p>
            
            <div class="social-links">
                <a href="#" class="social-link">Twitter</a>
                <a href="#" class="social-link">LinkedIn</a>
                <a href="#" class="social-link">Instagram</a>
            </div>
            
            <p style="margin-top: 20px; font-size: 12px;">
                You received this email because you signed up for the Gradlink waitlist.<br>
                If you no longer wish to receive these emails, you can <a href="#" style="color: #667eea;">unsubscribe here</a>.
            </p>
        </div>
    </div>
</body>
</html>
  `;
};

export const generateFollowUpEmailTemplate = (data: EmailTemplateData): string => {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gradlink Update - We're Making Progress!</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .progress-bar {
            background: rgba(255, 255, 255, 0.3);
            height: 8px;
            border-radius: 4px;
            margin: 20px 0;
            overflow: hidden;
        }
        .progress-fill {
            background: white;
            height: 100%;
            width: 75%;
            border-radius: 4px;
        }
        .content {
            padding: 40px 30px;
        }
        .update-section {
            background: #e8f5e8;
            border-radius: 8px;
            padding: 25px;
            margin: 25px 0;
            border-left: 4px solid #28a745;
        }
        .milestone {
            display: flex;
            align-items: center;
            margin: 20px 0;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 8px;
        }
        .milestone-icon {
            width: 40px;
            height: 40px;
            background: #28a745;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-right: 15px;
            font-size: 18px;
        }
        .footer {
            background: #343a40;
            color: #adb5bd;
            padding: 30px;
            text-align: center;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Exciting Updates from Gradlink!</h1>
            <p>We're 75% closer to launch!</p>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
        </div>

        <div class="content">
            <h2>Hi ${data.fullName}! 👋</h2>
            
            <p>We hope you're doing well! We wanted to share some exciting updates on our progress and what's coming next for Gradlink.</p>

            <div class="update-section">
                <h3 style="margin-top: 0; color: #28a745;">🎯 Recent Milestones</h3>
                
                <div class="milestone">
                    <div class="milestone-icon">✅</div>
                    <div>
                        <strong>AI Study Assistant Completed</strong><br>
                        <small>Our AI can now summarize PDFs and answer questions!</small>
                    </div>
                </div>
                
                <div class="milestone">
                    <div class="milestone-icon">✅</div>
                    <div>
                        <strong>Gamification System Ready</strong><br>
                        <small>Leaderboards, badges, and competitions are live!</small>
                    </div>
                </div>
                
                <div class="milestone">
                    <div class="milestone-icon">🔄</div>
                    <div>
                        <strong>Mobile App in Beta</strong><br>
                        <small>Testing on iOS and Android - looking great!</small>
                    </div>
                </div>
            </div>

            <h3>🎁 Special Early Access Perks</h3>
            <p>As one of our early waitlist members, you'll receive:</p>
            <ul>
                <li><strong>Free Premium Account</strong> for the first 6 months</li>
                <li><strong>Exclusive Beta Access</strong> starting next month</li>
                <li><strong>Direct Line to Founders</strong> for feedback and suggestions</li>
                <li><strong>Limited Edition Gradlink Swag</strong> delivered to your door</li>
            </ul>

            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; margin: 30px 0; border-radius: 8px;">
                <h3>📅 Coming Soon: Beta Launch</h3>
                <p>We're targeting <strong>early next month</strong> for our beta launch. Keep an eye on your inbox!</p>
                <a href="#" style="display: inline-block; background: white; color: #667eea; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 15px;">
                    Update My Preferences
                </a>
            </div>

            <p>Thank you for your patience and support. We can't wait to have you try Gradlink!</p>
            
            <p>Best regards,<br>
            <strong>The Gradlink Team</strong></p>
        </div>

        <div class="footer">
            <p>Questions? Just reply to this email - we read every single one!</p>
            <p style="margin-top: 20px; font-size: 12px;">
                You're receiving this because you're on the Gradlink waitlist.<br>
                <a href="#" style="color: #667eea;">Unsubscribe</a> | <a href="#" style="color: #667eea;">Update Preferences</a>
            </p>
        </div>
    </div>
</body>
</html>
  `;
};
