var push = require('web-push');

// Generar la primera vez
//let vapKeys = push.generateVAPIDKeys();
//console.log(vapKeys);

let vapKeys = {
    publicKey: 'BGyQYRkAmVUY0OvppE22riRC91rtmHVqUcAEDMBX9fpQC-mCz6xIY3v4kDFZAtsXtGzsCr_K-VcqhM_XUqZZoBk',
    privateKey: 'FKTho053f6AYg75YjQMzE2HqWbbEGwk3OoFBdU8Lfdc'
}

push.setVapidDetails("mailto:mcerdeira@provincianet.com.ar", vapKeys.publicKey, vapKeys.privateKey);

// Chrome

//let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/c7wId_UnSLg:APA91bHTyjV6J9BI4CsNk8HpGhcqoekI5fEDmmmQZfWdTel89twKRCzdiLg7c7cYRSonrpZi-JRP3Rqu9BUEXg5-y3GpXUPk6ilnKpxkGmpZYk0_KGcLnYZkpfYeIkQVU5TlImp5x50j","expirationTime":null,"keys":{"p256dh":"BJGJKPc_rb9nIhTy9vwujFECM7fGmU6MRqfE4ejx9n-hQtHlianFe--O8feKClm4SFBWo5mAdqfNr7XR9nFohkA","auth":"5DbWEFz4j9JxIjDkHMrF7A"}};

// Edge
//let sub = {"endpoint":"https://wns2-bl2p.notify.windows.com/w/?token=BQYAAABCRmr2t5XyJc46jfyGSszfqTC4W8v3ai7YHOWfYWMYzn%2bFNiadIjhC12nJcUmEH0l%2bp0Wckb84iShGzjnmZmrlbK5FvRimNK0boqtVPtIds7ttJOsObHH9w3T70Qf0wXb%2fbYi3F2uae1v0hwU7%2f5XqDcRKSn%2fPFp0T6SknU73qYBp0UAe6%2bTha110n4frB9KhpJZ%2bhn4x4sXPu%2bv4FH414RbPynN1bzOE1SkxwCBt3izXu1qupz0F7jphS8aXZYtSIXbyzo7ofZLph%2f4rd9ktS%2fZzKYGAduTai5zFvqJHQ182PDNIfwe8QyMR8rUDqd00ptoA9Yx3yJFkUde9L4U79","expirationTime":1643484447000,"keys":{"auth":"10uA_8X-svtvec3_gdMHWA","p256dh":"BJuwr-p4JfMv2UHx6jNiA0qQLkW7axt-XzseYwWk8s-zGlXVaZD1tWYLwt79kBHRFx9eVgySLpymU9tIp-gdjaY"}};

// Claudio
//let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fuw9wAcnzU8:APA91bF54Zx5dhD1J-lEXzIl1sD6u5-Pcz9V2NkNJ5RcKild_vmVbGKtxyPX4wmCZ18ixwYyF51OtYyHgH0g30lSydaJYWLBzRIU3z130nCArytJpsmpPB6mFXLO3dUSsCuDu-bWBoXr","expirationTime":null,"keys":{"p256dh":"BO9v8I74WpkZTi1VOhsK6UxssuBM0f9tGuDkLVtmtxtkU8nkkgdaRicsjyFc6frUkWc0Uk5Dm7iRmruuQsWXcno","auth":"_zso-v_82_b-2fE3OkE8WQ"}};

push.sendNotification(sub, "test");