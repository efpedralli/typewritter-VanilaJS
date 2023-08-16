
fascom();
function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
        );
}
async function fascom(){
    var txt1 = 'FUNDIÁRIO';
    var txt2 = 'AMBIENTAL'
    var txt3 = 'SOCIAL'
    var txt4 = 'COMUNICAÇÃO'
    txt1_len = txt1.length;
    txt2_len = txt2.length;
    txt3_len = txt3.length;
    txt4_len = txt4.length;
    i_1 = 0;
    i_2 = 1;
    i_3 = 0;
    i_4 = 1;
    i_5 = 0;
    i_6 = 1;
    i_7 = 0;
    i_8 = 3;
    while ( i_1 < txt1_len) {
        l1 = txt1.split('')[i_1];
        document.getElementById("fundiario").innerHTML+= l1;
        i_1++;
        await sleep(100);
    }
    await sleep(500);
    while ( i_2 < txt1_len){
        txt = document.getElementById("fundiario").innerHTML;
        txt_new = txt.slice(0, -1);
        document.getElementById("fundiario").innerHTML = txt_new;
        await sleep(100);
        i_2++;
    }
    while ( i_3 < txt2_len) {
        l1 = txt2.split('')[i_3];
        document.getElementById("ambiental").innerHTML+= l1;
        i_3++;
        await sleep(100);
    }
    await sleep(500);
    while ( i_4 < txt2_len){
        txt = document.getElementById("ambiental").innerHTML;
        txt_new = txt.slice(0, -1);
        document.getElementById("ambiental").innerHTML = txt_new;
        await sleep(100);
        i_4++;
    }
    while ( i_5 < txt3_len) {
        l1 = txt3.split('')[i_5];
        document.getElementById("social").innerHTML+= l1;
        i_5++;
        await sleep(100);
    }
    await sleep(500);
    while ( i_6 < txt3_len){
        txt = document.getElementById("social").innerHTML;
        txt_new = txt.slice(0, -1);
        document.getElementById("social").innerHTML = txt_new;
        await sleep(100);
        i_6++;
    }
    while ( i_7 < txt4_len) {
        l1 = txt4.split('')[i_7];
        document.getElementById("comunicacao").innerHTML+= l1;
        i_7++;
        await sleep(100);
    }
    await sleep(500);
    while ( i_8 < txt4_len){
        txt = document.getElementById("comunicacao").innerHTML;
        txt_new = txt.slice(0, -1);
        document.getElementById("comunicacao").innerHTML = txt_new;
        await sleep(100);
        i_8++;
    }
    document.getElementById('fascom-typewritter').classList.add('cor-final');
    await sleep(1500);
    document.getElementById('fundiario').innerHTML = '';
    document.getElementById('ambiental').innerHTML = '';
    document.getElementById('comunicacao').innerHTML = '';
    document.getElementById('social').innerHTML = '';
    document.getElementById('fascom-typewritter').classList.remove('cor-final');
    fascom();
}
