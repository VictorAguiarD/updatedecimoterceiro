function calcularDecimoTerceiro() {
    const salario = parseFloat(document.getElementById("salario").value);
    const meses = parseInt(document.getElementById("meses").value);

    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, insira um salário válido.");
        return;
    }
    
    if (isNaN(meses) || meses < 1 || meses > 12) {
        alert("Por favor, insira um número de meses trabalhados válido (entre 1 e 12).");
        return;
    }

    // Cálculo do décimo terceiro proporcional
    const decimoTerceiroTotal = (salario * meses) / 12;

    // Dividindo o valor em duas parcelas
    const primeiraParcela = decimoTerceiroTotal / 2;

    // Cálculo do INSS (simplificado)
    const aliquotaINSS = 0.08;
    const inss = decimoTerceiroTotal * aliquotaINSS;

    // Cálculo do Imposto de Renda (simplificado)
    // **Observação:** Esta é uma simplificação e deve ser adaptada às tabelas atuais.
    const baseIRRF = decimoTerceiroTotal - inss;
    let aliquotaIRRF = 0;
    let deducaoIRRF = 0;
    // ... (implementar lógica para definir alíquota e dedução de acordo com a tabela do IRRF)

    const irrf = (baseIRRF * aliquotaIRRF) - deducaoIRRF;

    // Cálculo da segunda parcela
    const segundaParcela = primeiraParcela - inss - irrf;

    const totalDecimo = primeiraParcela + segundaParcela;

    // Exibindo os resultados
    document.getElementById("primeira-parcela").textContent = primeiraParcela.toFixed(2);
    document.getElementById("segunda-parcela").textContent = segundaParcela.toFixed(2);
    document.getElementById("total-decimo").textContent = totalDecimo.toFixed(2);
    document.getElementById("result-container").style.display = "block";
}
