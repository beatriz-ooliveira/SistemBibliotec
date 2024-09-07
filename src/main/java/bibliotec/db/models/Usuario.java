package bibliotec.db.models;

import jakarta.persistence.*;

@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUsuario")
    private Integer idUsuario;  // AUTO_INCREMENT e chave primária

    @Column(name = "login", nullable = false)
    private String login;

    @Column(name = "senha", nullable = false)
    private String senha;

//    @OneToOne
//    @JoinColumn(name = "Funcionario_Pessoa_idPessoa")
//    private Funcionario Funcionario_Pessoa_idPessoa;

    @Column(name = "nivel_priv", nullable = false)
    private String nivelPriv;

    @Column(name = "ativo", nullable = false)
    private boolean ativo;

    // Construtor vazio necessário para o JPA
    public Usuario() {}

    // Construtor com argumentos
    public Usuario(String login, String senha, String nivelPriv, boolean ativo) {
        this.login = login;
        this.senha = senha;
        this.nivelPriv = nivelPriv;
        this.ativo = ativo;
    }

    // Getters e Setters
    public int getIdUsuario() {
        return idUsuario;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getNivelPriv() {
        return nivelPriv;
    }

    public void setNivelPriv(String nivelPriv) {
        this.nivelPriv = nivelPriv;
    }

    public boolean isAtivo() {
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }
}
