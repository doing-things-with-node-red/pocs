module.exports = {
    uiPort: process.env.PORT || 1880,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    adminAuth: {
        type:"strategy",
        strategy: {
            name: "azuread-openidconnect",
            label: 'Sign in with Azure',
            icon:"fa-windows",
            strategy: require("passport-azure-ad").OIDCStrategy,
            options: {
                identityMetadata: `https://login.microsoftonline.com/${process.env.AZURE_TENANT}/v2.0/.well-known/openid-configuration`,
                clientID: process.env.AZURE_CLIENT_ID,
                clientSecret: process.env.AZURE_CLIENT_SECRET,
                responseType: "code",
                passReqToCallback: false,
                responseMode: "query",
                redirectUrl: `http://localhost:8080/auth/strategy/callback`,
                allowHttpForRedirectUrl: true,
                loggingLevel: "error",
                scope: ['email', 'profile'],
                verify: (profile, done) => {
                    // HOTFIX: https://github.com/node-red/node-red/issues/1393#issuecomment-330035846
                    profile.username = profile._json.preferred_username;
                    done(null, profile);
                }
            }
        },
        users: [
            {
                username: process.env.AZURE_TEST_USER,
                permissions: "*"
            }
        ]
    },
    logging: {
        console: {
            level: "debug",
            metrics: false,
            audit: false
        }
    },
    editorTheme: {
        projects: {
            enabled: false
        }
    }
}