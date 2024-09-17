export function onRequest(context) {

    return new Response("Go.");

}

async function getToken(code) {

    const endpoint = 'https://api.notion.com/v1/oauth/token';
    const clientID = 'c4b55cfb-6794-47ac-b780-726c777b6670';
    const clientSecret = 'secret_NTeNXC5ZgsqZiOKnjhQNKZF0TFc5rPZ4F48ybPNWCKX';
    const clientAuth = btoa(`${clientID}:${clientSecret}`);

    return await fetch(endpoint, {
        headers: {
            'Authorization': `Basic ${clientAuth}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28'
        },
        body: JSON.stringify({
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': 'https://authorization.notion.vip/auth-notion'
        })
    }).then(res => res.json() );

}