import com.hivext.api.development.Scripting;

var resp = jelastic.env.control.AddEndpoint("${env.envName}", getParam("session"), getParam("nodeId"), getParam("port"), getParam('protocol', 'TCP'), getParam('name', 'Endpoint'));
if (resp.result != 0) return resp;

var url = "${env.domain}:" + resp.object.publicPort;

resp = jelastic.env.file.ReplaceInBody("${env.envName}", getParam("session"), "/etc/tuleap/plugins/git/etc/config.inc", "2222", resp.object.publicPort, 1, null, "cp", true, getParam("nodeId"));
if (resp.result != 0) return resp;
resp = jelastic.env.file.ReplaceInBody("${env.envName}", getParam("session"), "/etc/tuleap/plugins/git/etc/config.inc", "// $git_ssh_url", "$git_ssh_url", 1, null, "cp", true, getParam("nodeId"));
if (resp.result != 0) return resp;

var scripting =  hivext.local.exp.wrapRequest(new Scripting({
    serverUrl : "http://" + window.location.host.replace("app", "appstore") + "/"
}));

var text = "SSH has been configured for git on " + url;
return scripting.eval({
    script : "InstallApp",
    targetAppid : '${env.appid}',
    session: getParam("session"),
    manifest : {
        "jpsType" : "update",
        "application" : {
		"id": "sendEmail",
		"name": "${env.envName}",
		"success": {
		        "text": text,
		        "email": text
		}
	}
    }
});
