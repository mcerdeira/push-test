var push = require('web-push');
let vapKeys = {
    publicKey: 'BGyQYRkAmVUY0OvppE22riRC91rtmHVqUcAEDMBX9fpQC-mCz6xIY3v4kDFZAtsXtGzsCr_K-VcqhM_XUqZZoBk',
    privateKey: 'FKTho053f6AYg75YjQMzE2HqWbbEGwk3OoFBdU8Lfdc'
}

push.setVapidDetails("mailto:mcerdeira@provincianet.com.ar", vapKeys.publicKey, vapKeys.privateKey);

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/c7wId_UnSLg:APA91bHTyjV6J9BI4CsNk8HpGhcqoekI5fEDmmmQZfWdTel89twKRCzdiLg7c7cYRSonrpZi-JRP3Rqu9BUEXg5-y3GpXUPk6ilnKpxkGmpZYk0_KGcLnYZkpfYeIkQVU5TlImp5x50j", "expirationTime": null, "keys": { "p256dh": "BJGJKPc_rb9nIhTy9vwujFECM7fGmU6MRqfE4ejx9n-hQtHlianFe--O8feKClm4SFBWo5mAdqfNr7XR9nFohkA", "auth": "5DbWEFz4j9JxIjDkHMrF7A" } }
push.sendNotification(sub, "test");