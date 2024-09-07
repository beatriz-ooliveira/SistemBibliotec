package bibliotec.db.repositories;

import bibliotec.db.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    //Usuario findByCpf(Long cpf);

    Usuario findByLoginAndSenha(String login, String senha);

}
