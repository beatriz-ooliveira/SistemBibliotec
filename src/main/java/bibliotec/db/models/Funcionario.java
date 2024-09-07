//package br.unoeste.fipp.ativooperante2024.db.models;
//
//import jakarta.persistence.*;
//
//import java.util.Date;
//@Entity
//@Table(name="Funcionario")
//public class Funcionario {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name="Pessoa_idPessoa")
//    private int idPessoa;
//    @Column(name="cargo")
//    private String cargo;
//    @Column(name="salario")
//    private double salario;
//    @Column(name="data_admissao")
//    private Date data_admissao;
//    @Column(name="data_demissao")
//    private Date data_demissao;
//
//
//    public Funcionario() {
//    }
//
//    public Funcionario(int idPessoa, String cargo, double salario, Date data_admissao, Date data_demissao) {
//        this.idPessoa = idPessoa;
//        this.cargo = cargo;
//        this.salario = salario;
//        this.data_admissao = data_admissao;
//        this.data_demissao = data_demissao;
//    }
//
//
//    public int getIdPessoa() {
//        return idPessoa;
//    }
//
//    public void setIdPessoa(int idPessoa) {
//        this.idPessoa = idPessoa;
//    }
//
//    public String getCargo() {
//        return cargo;
//    }
//
//    public void setCargo(String cargo) {
//        this.cargo = cargo;
//    }
//
//    public double getSalario() {
//        return salario;
//    }
//
//    public void setSalario(double salario) {
//        this.salario = salario;
//    }
//
//    public Date getData_admissao() {
//        return data_admissao;
//    }
//
//    public void setData_admissao(Date data_admissao) {
//        this.data_admissao = data_admissao;
//    }
//
//    public Date getData_demissao() {
//        return data_demissao;
//    }
//
//    public void setData_demissao(Date data_demissao) {
//        this.data_demissao = data_demissao;
//    }
//
//
//}
