var pais = 'eua'
console.log(`Vivendo em ${pais}`)
if (pais != 'Brasil') {
    console.log('Você é estrangeiro')
} else {
    console.log('Voce é brasileiro')
}
/*
<h1>Sistema de Multas</h1>
Velocidade do carro: <input type="number" name="txtvel" id="txtvel"> Km/h
<input type="button" value="Verificar" onclick="calcular()">
<div id="res">

</div>
<script>
    function calcular() {
        var txtv = window.document.querySelector('input#txtvel')
        var res = window.document.querySelector('div#res')
        var vel = Number(txtv.value)
        res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong><p>`
        if (vel > 60) {
            res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade<p>`
        } else {
            res.innerHTML += `Tudo certo amigo`
        }
        res.innerHTML += `<p>Dirija sempre com cinto de segurança<p>`
    }
</script> */