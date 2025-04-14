(function stringExtension() {

    //ensureStart
    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {
            return str + this.toString();
        }
        return this.toString();
    };

    //ensureEnd
    String.prototype.ensureEnd = function (str) {
        if (!this.toString().endsWith(str)) {
            return this.toString() + str;
        }
        return this.toString();
    };

    //isEmpty
    String.prototype.isEmpty = function () {
        return this.toString().localeCompare("") === 0;
    }

    //truncate
    String.prototype.truncate = function (n) {

        //case 1
        if (n <= 3) {
            return ".".repeat(n);
        }

        //case 2
        if (this.toString().length <= n) {
            return this.toString();
        } else {

            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");

            //case 3
            if (lastIndex !== -1) {
                return this.toString().substr(0, lastIndex) + "...";
            } 
            //case 4
            else {
                return this.toString().substr(0, n - 3) + "...";
            }

            

        }

    };

    //format
    String.format = function (string, ...params) {

        for (let i = 0; i < params.length; i++) {

            let index = string.indexOf("{" + i + "}");

            while (index !== -1) {

                string = string.replace("{" + i + "}", params[i]);
                index = string.indexOf("{" + i + "}");

            }

        }

        return string;

    };

    
})();