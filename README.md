![Tuleap](https://www.tuleap.org/assets/img/logo-tuleap-flat-orange-black.svg)

# Tuleap
[Tuleap](https://www.tuleap.org/) is an open-source tool helping you to manage your software development and organize your team.

## Deploy Tuleap on Hidora

1. On the Jelastic console, click on Import and select the URL tab.
2. Paste this URL in the input field : https://raw.githubusercontent.com/HidoraSwiss/manifest-tuleap/master/manifest.jps and click on Import.
3. Provide a domain name and an environment name for your new environnement and then click on Install.

Few minutes later, your new Tuleap server is installed and you can start to use it.

> If you want to use a default name (foo.my-jelastic-provider.com), the domain name and the environment name must be the same value. If you want to use a custom domain name, you need your own SSL/TLS certificate and update the NGINX config in order to use it.
