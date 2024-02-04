height = screen.height;
width = screen.width;
let w = innerWidth;
let h = innerHeight;
let language = window.navigator.language;


document.getElementById("height").innerHTML = "Screen height: " + height + "px";
document.getElementById("width").innerHTML = "Screen width: " + width + "px";
document.getElementById("lang").innerHTML = "Browser language: " + language;
document.getElementById("w").innerHTML = "Browser width: " + w + "px";
document.getElementById("h").innerHTML = "Browser height: " + h + "px"


document.addEventListener('DOMContentLoaded', function () {
    // month number into text 
    function SuomalainenKuukausi(nro) {
        const kuukaudet = ['tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta', 'toukokuuta', 'kesäkuuta', 'heinäkuuta', 'elokuuta', 'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta'];
        return kuukaudet[nro];
    }

    // the date
    function SuomalainenPvm() {
        const now = new Date();
        const paiva = now.getDate();
        const kuukausi = SuomalainenKuukausi(now.getMonth());
        const vuosi = now.getFullYear();

        return [paiva, kuukausi, vuosi];
    }

    // hours and minutes
    function SuomalainenAika() {
        const now = new Date();

        const tunnit = now.getHours();
        const minuutit = now.getMinutes();

        return [tunnit, minuutit];
    }

    // date and time
    const suomalainenPvm = SuomalainenPvm();
    const suomalainenAika = SuomalainenAika();

    // all and updating
    const aikaJaPvmElementti = document.getElementById('ajankohta');
    aikaJaPvmElementti.textContent = 'Nykyinen päivämäärä: ' + suomalainenPvm[0] + '.' + suomalainenPvm[1] + ' ' + suomalainenPvm[2]+ ', Aika:' + suomalainenAika[0] + ':' + suomalainenAika[1];
});