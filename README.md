# Tuleap
[Tuleap](https://www.tuleap.org/) is an 100% open-source tool helping you to manage your software development and organize your team.

## Deploy Tuleap on Hidora

1. On the Jelastic console, click on Import and select the URL tab.
2. Paste this URL in the input field : https://raw.githubusercontent.com/HidoraSwiss/manifest-tuleap/master/manifest.jps and click on Import.
3. Provide a domain name and an environnment name (value are the same if you not use your own domain name) for your new environnement and then click on Install.

Few minutes later, your new Tuleap server is installed and you can start use it.

> By default, the SSL/TLS certificate is self-signed. See **Use a valid SSL/TLS certificate** for an advanced configuration.

## Use a valid SSL/TLS certificate

1. Upload your certificate and the associate private key on your Tuleap-aio node. For example, in `/etc/pki/certs`
2. Open `/etc/nginx/conf.d/tuleap.conf` and modify the configuration:

```nginx
ssl_certificate /etc/pki/certs/my-certificate.crt;
ssl_certificate_key /etc/pki/certs/my-private-key.key;
```

3. Restart the Tuleap-aio node using the web UI or manually reload NGINX using SSH with `/etc/init.d/nginx reload`
