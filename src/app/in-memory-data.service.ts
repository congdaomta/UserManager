import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 1,
        name: 'Margaux Moryson',
        email: 'mmoryson0@feedburner.com',
        role: 'Administrator'
      },
      {
        id: 2,
        name: 'Lizzy Denys',
        email: 'ldenys1@sphinn.com',
        role: 'Editor'
      },
      {
        id: 3,
        name: 'Parsifal OCanavan',
        email: 'pocanavan2@si.edu'
        , role: 'Author'
      },
      {
        id: 4,
        name: 'Jayne Berrigan',
        email: 'jberrigan3@springer.com'
        , role: 'Contributor'
      },
      {
        id: 5,
        name: 'Clim Gorhardt',
        email: 'cgorhardt4@xinhuanet.com'
        , role: 'Subscriber'
      },
      {
        id: 6,
        name: 'Dyna Rodmell',
        email: 'drodmell5@discovery.com'
        , role: 'User basic'
      },
      {
        id: 7,
        name: 'Rowe Varndell',
        email: 'rvarndell6@google.co.uk'
        , role: 'User basic'
      },
      {
        id: 8,
        name: 'Denys Juste',
        email: 'djuste7@mayoclinic.com'
        , role: 'User basic'
      },
      {
        id: 9,
        name: 'Marion Hawthorn',
        email: 'mhawthorn8@cbslocal.com'
        , role: 'User basic'
      },
      {
        id: 10,
        name: 'Bonnibelle Chyuerton',
        email: 'bchyuerton9@dot.gov'
        , role: 'User basic'
      },
      {
        id: 11,
        name: 'Demetrius Keaveny',
        email: 'dkeavenya@alibaba.com'
        , role: 'User basic'
      },
      {
        id: 12,
        name: 'Heywood Utridge',
        email: 'hutridgeb@chronoengine.com'
        , role: 'User basic'
      },
      {
        id: 13,
        name: 'Jedidiah Allchorn',
        email: 'jallchornc@devhub.com'
        , role: 'User basic'
      },
      {
        id: 14,
        name: 'Julie Barz',
        email: 'jbarzd@simplemachines.org'
        , role: 'User basic'
      },
      {
        id: 15,
        name: 'Brandtr Larcier',
        email: 'blarciere@51.la'
        , role: 'User basic'
      },
      {
        id: 16,
        name: 'Cathrine Courtin',
        email: 'ccourtinf@yahoo.co.jp'
        , role: 'User basic'
      },
      {
        id: 17,
        name: 'Gradey Laborde',
        email: 'glabordeg@w3.org'
        , role: 'User basic'
      },
      {
        id: 18,
        name: 'Archibold Guiel',
        email: 'aguielh@engadget.com'
        , role: 'User basic'
      },
      {
        id: 19,
        name: 'Batsheva Itzakson',
        email: 'bitzaksoni@comsenz.com'
        , role: 'User basic'
      },
      {
        id: 20,
        name: 'Feliks Casale',
        email: 'fcasalej@bluehost.com'
        , role: 'User basic'
      },
      {
        id: 21,
        name: 'Carlen Spires',
        email: 'cspiresk@soup.io'
        , role: 'User basic'
      },
      {
        id: 22,
        name: 'Harold Woolway',
        email: 'hwoolwayl@hugedomains.com'
        , role: 'User basic'
      },
      {
        id: 23,
        name: 'Celesta Shrawley',
        email: 'cshrawleym@smh.com.au'
        , role: 'User basic'
      },
      {
        id: 24,
        name: 'Margery Van Castele',
        email: 'mvann@yahoo.com'
        , role: 'User basic'
      },
      {
        id: 25,
        name: 'Britt Doud',
        email: 'bdoudo@bandcamp.com'
        , role: 'User basic'
      },
      {
        id: 26,
        name: 'Sterling OCollopy',
        email: 'socollopyp@prnewswire.com'
        , role: 'User basic'
      },
      {
        id: 27,
        name: 'Carol-jean Chiverton',
        email: 'cchivertonq@desdev.cn'
        , role: 'User basic'
      },
      {
        id: 28,
        name: 'Gusty Caslin',
        email: 'gcaslinr@slate.com'
        , role: 'User basic'
      },
      {
        id: 29,
        name: 'Phil Kemmet',
        email: 'pkemmets@dagondesign.com'
        , role: 'User basic'
      },
      {
        id: 30,
        name: 'Cross Hatrey',
        email: 'chatreyt@google.it'
        , role: 'User basic'
      },
      {
        id: 31,
        name: 'Ingelbert MacFaul',
        email: 'imacfaulu@vkontakte.ru'
        , role: 'User basic'
      },
      {
        id: 32,
        name: 'Daffy Woodyear',
        email: 'dwoodyearv@clickbank.net'
        , role: 'User basic'
      },
      {
        id: 33,
        name: 'Theodor Twaits',
        email: 'ttwaitsw@sphinn.com'
        , role: 'User basic'
      },
      {
        id: 34,
        name: 'Nertie Lea',
        email: 'nleax@omniture.com'
        , role: 'User basic'
      },
      {
        id: 35,
        name: 'Murial Gymlett',
        email: 'mgymletty@hud.gov'
        , role: 'User basic'
      },
      {
        id: 36,
        name: 'Natty Stonebridge',
        email: 'nstonebridgez@washingtonpost.com'
        , role: 'User basic'
      },
      {
        id: 37,
        name: 'Tabby Scrivens',
        email: 'tscrivens10@bandcamp.com'
        , role: 'User basic'
      },
      {
        id: 38,
        name: 'Graehme Dahler',
        email: 'gdahler11@bigcartel.com'
        , role: 'User basic'
      },
      {
        id: 39,
        name: 'Avram Giffard',
        email: 'agiffard12@shutterfly.com'
        , role: 'User basic'
      },
      {
        id: 40,
        name: 'Giles Brownscombe',
        email: 'gbrownscombe13@berkeley.edu'
        , role: 'User basic'
      },
      {
        id: 41,
        name: 'Prinz Matthisson',
        email: 'pmatthisson14@linkedin.com'
        , role: 'User basic'
      },
      {
        id: 42,
        name: 'Huntington Burley',
        email: 'hburley15@zimbio.com'
        , role: 'User basic'
      },
      {
        id: 43,
        name: 'Hercules Lardner',
        email: 'hlardner16@diigo.com'
        , role: 'User basic'
      },
      {
        id: 44,
        name: 'Harri Easson',
        email: 'heasson17@mlb.com'
        , role: 'User basic'
      },
      {
        id: 45,
        name: 'Wit Hedditch',
        email: 'whedditch18@ocn.ne.jp'
        , role: 'User basic'
      },
      {
        id: 46,
        name: 'Cathe Scholcroft',
        email: 'cscholcroft19@symantec.com'
        , role: 'User basic'
      },
      {
        id: 47,
        name: 'Jamill Titchmarsh',
        email: 'jtitchmarsh1a@behance.net'
        , role: 'User basic'
      },
      {
        id: 48,
        name: 'Dinnie Hevner',
        email: 'dhevner1b@indiatimes.com'
        , role: 'User basic'
      },
      {
        id: 49,
        name: 'Egbert MacNeillie',
        email: 'emacneillie1c@joomla.org'
        , role: 'User basic'
      },
      {
        id: 50,
        name: 'Maridel Fuggle',
        email: 'mfuggle1d@washingtonpost.com'
        , role: 'User basic'
      }
    ];
    return { users };
  }
}
