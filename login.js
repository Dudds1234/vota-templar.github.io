document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.getElementById("btnLogin");
    const numeroAluno = document.getElementById("numeroAluno");
    const senhaAdmin = document.getElementById("senhaAdmin");
    const qrcodeCanvas = document.getElementById("qrcode");

    const senhaAdminCorreta = "VotaTemplar2025"; // senha de admin

    // Pega automaticamente o IP/hostname e porta do servidor
    const urlLogin = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/index.html`;

    // Gerar QR Code
    QRCode.toCanvas(qrcodeCanvas, urlLogin, {
        width: 180,
        color: { dark: '#FF0000', light: '#FFFFFF' }
    }, function(error) {
        if(error) console.error(error);
        console.log("QR Code gerado!");
    });

    // Login
    btnLogin.addEventListener("click", () => {
        const aluno = numeroAluno.value.trim();
        const senha = senhaAdmin.value.trim();

        if (senha !== "") { 
            if (senha === senhaAdminCorreta) {
                window.location.href = "admin.html";
            } else {
                alert("Senha de administrador incorreta!");
            }
        } else if (aluno !== "") {
            localStorage.setItem("alunoLogado", aluno);
            window.location.href = "aluno.html";
        } else {
            alert("Preencha o número do aluno ou senha do admin!");
        }
    });
});
