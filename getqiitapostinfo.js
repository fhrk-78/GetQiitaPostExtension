class GetQiitaPostInfo {
  getInfo() {
    return {
      id: 'getqiitapostinfo',
      name: 'It uses qiita API.',
      docsURI: '...',
      blocks: [
        {
          opcode: 'getPostInfoWithJSON',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get post with JSON [ITEMID]',
          arguments: {
              ITEMID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'e84f5aad7757afce82ba'
              }
          }
        }
      ]
    };
  }

  getPostInfoWithJSON(args) {
    return fetch(`https://qiita.com/api/v2/items/${args.ITEMID}`)
        .then((response) => response.text())
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        });
  }
}

Scratch.extensions.register(new GetQiitaPostInfo());
