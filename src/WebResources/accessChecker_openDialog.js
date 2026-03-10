function callFlow(primaryControl) {
    // 1. Get the URL of your flow
    var flowUrl = "https://76714da96e6ae709aa49b5415a09dc.dd.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/5b0b4b0e766044e1b6b9d80f56b1ad76/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1iHtu38-rCNlCaMlslXKXWJRX3lm6CQVGBYJUG0bpF0";

    // 2. Get the ID of the current record (formContext)
    var formContext = primaryControl;
    var recordId = formContext.data.entity.getId().replace('{', '').replace('}', '');

    // 3. Prepare the data to send
    var data = JSON.stringify({
        "recordId": recordId
    });

    // 4. Send the request
    fetch(flowUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data
    })
    .then(function () {
        Xrm.Navigation.openAlertDialog({ text: "Flow triggered successfully!" });
    })
    .catch(function (error) {
        console.error("Error:", error);
    });
}