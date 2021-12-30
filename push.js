var push = require('web-push');
let vapKeys = {
    publicKey: 'BGyQYRkAmVUY0OvppE22riRC91rtmHVqUcAEDMBX9fpQC-mCz6xIY3v4kDFZAtsXtGzsCr_K-VcqhM_XUqZZoBk',
    privateKey: 'FKTho053f6AYg75YjQMzE2HqWbbEGwk3OoFBdU8Lfdc'
  }

  push.setVapidDetails("mailto:mcerdeira@provincianet.com.ar", vapKeys.publicKey, vapKeys.privateKey);
  
  let sub = {};
  push.sendNotification(sub, "test");