package bibliotec.controllers;

import bibliotec.db.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("apis/cidadao/")
public class LeitorRestController {


    @Autowired
    UsuarioRepository usuRepo;

    @GetMapping("teste-conexao")
    public String testeConexao() {
        return "Conectado";
    }
/*
    @GetMapping("/listar-orgaos")
    public ResponseEntity<List<Orgao>> listarOrgaos() {
        List<Orgao> orgaos = orgaoservice.getAll();
        return ResponseEntity.ok(orgaos);
    }

    @GetMapping("/listar-tipos")
    public ResponseEntity<List<Tipo>> listarTipos() {
        List<Tipo> tipos = tipoRepo.findAll();
        return ResponseEntity.ok(tipos);
    }

    @PostMapping("/enviar-denuncias")
    public ResponseEntity<DenunciaResponse> enviarDenuncia(@RequestBody DenunciaRequest request) {
        Orgao org = orgaoservice.getById(request.getOrgaoId());
        Tipo tip = tipoRepo.getById(request.getTipoId());
        Usuario usuario = usuRepo.findByEmail(request.getUsuarioId());
        Denuncia den = new Denuncia(request.getTitulo(), request.getDescricao(), request.getUrgencia(), request.getData(), org, tip, usuario);
        Denuncia savedDenuncia = denunciaRepo.save(den);

        savedDenuncia.getOrgao().getNome();
        savedDenuncia.getTipo().getNome();
        savedDenuncia.getUsuario().getEmail();

        DenunciaResponse response = new DenunciaResponse(savedDenuncia);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Object> cadastrarUsuario(@RequestBody Usuario usuario) {
        try {
            usuario.setNivel(2); // Nível de cidadão
            usuRepo.save(usuario);
            return new ResponseEntity<>("Usuário cadastrado com sucesso.", HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace(); // Log detalhado da exceção
            return new ResponseEntity<>("Erro ao cadastrar o usuário: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/minhas-denuncias")
    public ResponseEntity<Object> listarMinhasDenuncias(@RequestParam(value = "userEmail") String userEmail) {
        // Primeiro, você precisará encontrar o usuário pelo e-mail
        Usuario usuario = usuRepo.findByEmail(userEmail);

        if (usuario != null) {
            // Se o usuário for encontrado, busque as denúncias associadas a ele
            List<Denuncia> denuncias = denunciaRepo.findAllByUsuario(usuario);
            return ResponseEntity.ok(denuncias);
        } else {
            // Se o usuário não for encontrado, retorne uma resposta adequada (por exemplo, 404 Not Found)
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/get-all-orgaos")
    public ResponseEntity<Object> buscarTodosOrgaos()
    {   return new ResponseEntity<>(orgaoservice.getAll(),HttpStatus.OK);
    }

    // Outros endpoints relacionados ao cidadão podem ser adicionados aqui
*/
}
