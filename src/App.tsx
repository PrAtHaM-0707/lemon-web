import React, { useState } from 'react';
import {
  Bot,
  MessageSquare,
  Gift,
  Shield,
  Award,
  Users,
  Bell,
  Lock,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
} from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-yellow-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy for Lemonify</h1>
      <div className="prose prose-yellow max-w-none">
        <p className="text-gray-600 mb-6">
          At Lemonify, we value your privacy and are committed to protecting your personal information. 
          This Privacy Policy explains how we collect, use, and safeguard your data when you use our Discord bot, Lemonify.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>User Data:</strong> When you interact with Lemonify, we may collect basic Discord user information such as usernames, user IDs, and server IDs for bot functionality.</li>
          <li><strong>Message Content:</strong> We do not log or store message content. However, for certain commands (e.g., logging or moderation features), relevant information may be temporarily processed.</li>
          <li><strong>Guild Information:</strong> We may store guild-specific settings such as prefix, moderation logs, or other customizable features to enhance the bot's functionality.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>To operate and improve Lemonify's features.</li>
          <li>To provide moderation, music playback, logging, and other server functionalities.</li>
          <li>To troubleshoot technical issues and improve user experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Sharing:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>We do not sell, trade, or share your information with third parties.</li>
          <li>Data may be shared with Discord for the purpose of complying with their Terms of Service or resolving disputes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Retention:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>We retain data only as long as necessary for the functionality of Lemonify.</li>
         <li>
  Users may request deletion of personal data where applicable by joining our{' '}
  <a 
    href="https://discord.gg/fjQz6cmB4W" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-yellow-600 hover:text-yellow-700"
  >
    Support Server
  </a> or contacting us via{' '}
  <a 
    href="mailto:mittalpratham313@gmail.com" 
    className="text-yellow-600 hover:text-yellow-700"
  >
    Email
  </a>.
</li>
</ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Rights:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>You may request access to, correction of, or deletion of your personal data.</li>
          <li>Contact us to exercise these rights or for any privacy-related inquiries.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Security:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>We implement appropriate security measures to protect user data.</li>
          <li>However, no method of transmission over the internet is 100% secure.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Policy:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>We reserve the right to update this Privacy Policy at any time.</li>
          <li>Significant changes will be notified through Discord or other appropriate channels.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us:</h2>
        <p className="mb-6">
          If you have any questions or concerns about this Privacy Policy or how your data is handled, 
          please contact us at our [Support Server]((https://discord.gg/fjQz6cmB4W)).
        </p>

        <p className="font-semibold">
          By using Lemonify, you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </div>
    </div>
  );
}

function DiscordToS() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Discord Terms of Service</h1>
      <div className="prose prose-yellow max-w-none">
        <p className="text-gray-600 mb-6">
          By using Lemonify, you agree to comply with Discord's Terms of Service. Here are some key points to remember:
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Server Rules and Guidelines</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Follow Discord's Community Guidelines</li>
          <li>No harassment, hate speech, or inappropriate content</li>
          <li>Respect intellectual property rights</li>
          <li>No spamming or disruptive behavior</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Bot Usage</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Do not abuse or exploit bot features</li>
          <li>Respect rate limits and cooldowns</li>
          <li>Do not use the bot for malicious purposes</li>
          <li>Report any bugs or vulnerabilities to our support team</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Content Guidelines</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>No NSFW content in non-NSFW channels</li>
          <li>No illegal content or activities</li>
          <li>No sharing of personal information</li>
          <li>Keep conversations appropriate for the channel's topic</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Moderation</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Server moderators have final say in their servers</li>
          <li>Follow moderator instructions</li>
          <li>Appeal bans through proper channels</li>
          <li>Report rule violations to server moderators</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Account Security</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Keep your account secure</li>
          <li>Don't share account credentials</li>
          <li>Enable two-factor authentication when possible</li>
          <li>Report suspicious activity</li>
        </ul>

        <p className="mt-8 text-gray-600">
          For the complete Discord Terms of Service, please visit{' '}
          <a href="https://discord.com/terms" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700">
            Discord's Terms of Service page
          </a>.
        </p>
      </div>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'tos'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return (
          <>
            <button
              onClick={() => setCurrentPage('home')}
              className="fixed top-4 left-4 inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Back to Home
            </button>
            <PrivacyPolicy />
          </>
        );
      case 'tos':
        return (
          <>
            <button
              onClick={() => setCurrentPage('home')}
              className="fixed top-4 left-4 inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Back to Home
            </button>
            <DiscordToS />
          </>
        );
      default:
        return (
          <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16">
              <div className="text-center max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <Bot className="h-12 w-12 text-yellow-500 mr-3" />
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Lemonify</h1>
                </div>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  The Ultimate Multipurpose Discord Bot for Your Community
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://discord.com/oauth2/authorize?client_id=1252893802193096806&permissions=8&integration_type=0&scope=bot+applications.commands"
                    className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Add to Discord <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="https://discord.gg/fjQz6cmB4W"
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors"
                  >
                    Support Server <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={Gift}
                  title="Advanced Giveaway System"
                  description="Host exciting giveaways with customizable duration, requirements, and multiple winners."
                />
                <FeatureCard
                  icon={MessageSquare}
                  title="Smart Ticket System"
                  description="Streamline support with an organized ticket system for handling member inquiries."
                />
                <FeatureCard
                  icon={Shield}
                  title="Auto Moderation"
                  description="Keep your server safe with intelligent content filtering and automated moderation."
                />
                <FeatureCard
                  icon={Award}
                  title="Leveling System"
                  description="Reward active members with experience points and custom roles based on participation."
                />
                <FeatureCard
                  icon={Users}
                  title="Welcome System"
                  description="Greet new members with customizable welcome messages and role assignment."
                />
                <FeatureCard
                  icon={Bell}
                  title="AFK System"
                  description="Let members set custom AFK statuses to inform others when they're away."
                />
              </div>
            </div>

            {/* Privacy Section */}
            <div className="bg-gray-50 py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <Lock className="h-12 w-12 text-gray-600 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold mb-6">Your Privacy Matters</h2>
                  <p className="text-gray-600 mb-8">
                    We take your privacy seriously. Your data is securely stored and never shared with third parties.
                    We only collect what's necessary to provide you with the best bot experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setCurrentPage('privacy')}
                      className="text-yellow-600 hover:text-yellow-700 font-semibold inline-flex items-center"
                    >
                      Read our Privacy Policy <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setCurrentPage('tos')}
                      className="text-yellow-600 hover:text-yellow-700 font-semibold inline-flex items-center"
                    >
                      Discord Terms of Service <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-8">
              <div className="container mx-auto px-4 text-center">
                <p>© 2024 Lemonify. All rights reserved.</p>
                <p className="mt-2">Made with ❤️ for Discord communities</p>
              </div>
            </footer>
          </div>
        );
    }
  };

  return <div className="min-h-screen bg-white">{renderPage()}</div>;
}

export default App;
