    function extract(link) {
        let domain = document.createElement('a');
        domain.href = link;
        link = domain.hostname;
        this.link = link;
    }
    extract.prototype.host = function () {
        alert('Domain: ' + this.link);

    }
    extract.prototype.subDomain = function () {
        let splittedHost = this.link.split('www');
        let joined = splittedHost.join('');
        joined = joined.split('.');

        alert('Domain: ' + this.link + '\n' + 'Subdomain: ' + joined[0]);
    }
    $(document).ready(function () {
        $('button').click(function () {
            var $input = $('#url').val();
            var obj = new extract($input);
            obj.host();
            obj.subDomain();

        });

    });