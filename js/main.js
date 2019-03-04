$(document).ready(function () {

    function extract(link) {
        let domain = document.createElement('a');
        domain.href = link;
        return domain;
    }
    $('button').click(function () {
        let url = $('input').val();
        let extracted = extract(url);
        let host = extracted.hostname;
        let splittedHost = host.split('www').join('');
        splittedHost = splittedHost.split('.');
        console.log(splittedHost);
        let subDomain = host.split('.');
        if (splittedHost[0] == "") {
            alert('Domain: ' + host);
        } else {
            alert('Domain: ' + host + '\n' + 'Subdomain: ' + subDomain[0]);
        }

    });
});