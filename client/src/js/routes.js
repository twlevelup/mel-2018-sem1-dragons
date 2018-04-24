const HomePage = require('./pages/homePage');
const ContactsPage = require('./pages/contactsPage');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');
const DemoPage = require('./pages/demoPage');
const HelpPage = require('./pages/helpPage');
const avatarPage = require('./pages/avatarPage');

const GamePage = require('./pages/gamePage');

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'demo': DemoPage,
  'help': HelpPage,
  'avatar': avatarPage,
  'game': GamePage
};
