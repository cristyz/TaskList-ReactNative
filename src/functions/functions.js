const functions = {

    getHora: function getHora() {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        let d = new Date();
        let h = addZero(d.getHours());
        let m = addZero(d.getMinutes());
        let s = addZero(d.getSeconds());
        let time = (h + ":" + m)
        return time
    },

    dataFormat: function dataAtualFormatada() {
        let data = new Date(),
            dia = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0' + dia : dia,
            mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0' + mes : mes,
            anoF = data.getFullYear();
        return diaF + "/" + mesF + "/" + anoF;
    }
}

export default functions