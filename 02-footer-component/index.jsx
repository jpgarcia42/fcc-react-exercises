export const Footer = () => {
  return (
    <footer>
      {/* Primeira Lista (2 itens) */}
      <ul>
        <li className="nav-item">
          <a href='#'>Fitness Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="#">Watch Videos</a>
        </li>
      </ul>

      {/* Segunda Lista (2 itens) */}
      <ul>
        <li className="nav-item">
          <a href="#">Privacy Policy</a>
        </li>
        <li className="nav-item">
          <a href="#">Services</a>
        </li>
      </ul>

      {/* Terceira Lista (2 itens) */}
      <ul>
        <li className="nav-item">
          <a href="#">Discord</a>
        </li>
        <li className="nav-item">
          <a href="#">Terms & Conditions</a>
        </li>
      </ul>

      {/* Parágrafo com o Copyright */}
      <p>© 2024 Fitness Dashboard. All Rights Reserved.</p>
    </footer>
  );
};