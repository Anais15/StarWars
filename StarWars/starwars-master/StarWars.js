'use strict';

var quoteOf = {};
        var quoteIs = function(author) {
            return function (quote) {
                quoteOf[author] = quote;
            };
        };

var quotes = [{
  'author': '- Yoda',
  'quote': 'When 900 years old, you reach… Look as good, you will not.',
  'image': 'yoda.jpg'
}, {
  'author': '- Senator palpatine',
  'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.',
  'image': 'senator_palpatine.jpeg'
}, {
  'author': '- Count Dooku',
  'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.',
  'image': 'count_dooku.jpg'
}, {
  'author': '- Darth vader',
  'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.',
  'image': 'darth_vader.jpg'
}, {
  'author': '- Princess leila',
  'quote': 'Aren\'t you a little short for a storm trooper?',
  'image': 'princess_leila.jpg'
}, {
  'author': '- Yoda',
  'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.',
  'image': 'yoda2.png'
}, {
  'author': '- Qui-Gon Jinn',
  'quote': 'Your focus determines your reality',
  'image': 'qui_gon_jinn.jpg'
}, {
  'author': '- Yoda',
  'quote': 'Do. Or do not. There is no try.',
  'image': 'yoda3.jpg'
}, {
  'author': '- Obi-Wan-Kenobi',
  'quote': 'In my experience there is no such thing as luck.',
  'image': 'obi_wan_kenobi.jpg'
}, {
  'author': '- Yoda',
  'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice',
  'image': 'yoda4.jpg'
}, {
  'author': '- Darth Vader',
  'quote': 'The Force is strong with this one.',
  'image': 'darth_vader2.jpeg'
}];
