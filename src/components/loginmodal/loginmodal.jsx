import { useState } from "react";
import styles from "./LoginModal.module.css";
import Logo from "../../assets/logo.png";

function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login", { email, password });
    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
        <h2>Entrar</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className={styles.submitButton}>Login</button>
          <div className={styles.noAccount}>
            <span>Não tem conta? <a href="https://accounts.nike.com/lookup?client_id=b8277a07e530f1a44fa44feecd7c5276&redirect_uri=https://login.gruposbf.com.br/auth/realms/nike/broker/oidc/endpoint&response_type=code&scope=membership:partner_entitlements::read:%20order_management:linked_partner_orders::create:%20contactbr%20openid%20profile%20email&state=JI2ldvftG40ork26B_inLlPX2yHjPFlVBFmbIivfrqI.tp8odWfsDjE.wxiIGPRiTLyT74W1N_pmgQ.eyJydSI6Imh0dHBzOi8vd3d3Lm5pa2UuY29tLmJyL2FwaS9hdXRoL2NhbGxiYWNrL2tleWNsb2FrIiwicnQiOiJjb2RlIiwic3QiOiJMNGtmd3MzYmJPdk9PT3c3bmlQazJfMWUySURsS0RJeEZDbEVZaG16VWk0In0&prompt=login&ui_locales=pt-BR&code_challenge=Rj_9ZEdHE-i_ViXeDXYGZsDwmuh4qg2-Nw8ljdOqVOQ&code_challenge_method=S256&nonce=hgshIpMRStCP0sablwKl7A" target="_blank">Crie uma agora</a></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
