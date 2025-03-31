export default function Footer() {
  return (
    <footer className="bg-jardin-marron-medio text-white pt-12">
      <div className="px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contacto */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contacto</h3>
          <p>
            Para dudas o asistencia, contáctanos por aquí:<br />
            Lunes a Viernes de 9h a 18h<br />
            <span className="inline-block mt-2">→ contacto@vivagarden.mx</span><br />
            <span>→ (81) 1234-5678</span>
          </p>
        </div>

        {/* Métodos de Pago */}
        <div>
          <h3 className="text-lg font-bold mb-2">Métodos de Pago</h3>
          <p>
            Pagos con Visa, Mastercard y PayPal. Tus compras están protegidas con cifrado SSL, garantizando transacciones seguras.
          </p>
        </div>

        {/* Ver y Comprar */}
        <div>
          <h3 className="text-lg font-bold mb-2">Ver y Comprar</h3>
          <ul className="space-y-1">
            <li>Plantas y Macetas</li>
            <li>Herramientas</li>
            <li>Decoración</li>
            <li>Checkout</li>
          </ul>
        </div>
      </div>

      <div className="bg-jardin-marron-oscuro text-center text-sm mt-12 py-4 px-4">
        <p>© 2025 VivaGarden. Cultivando contigo.</p>
        <p>Todo el contenido de este sitio está protegido por derechos de autor. Gracias por confiar en nosotros para llevar la naturaleza a tu hogar.</p>
      </div>
    </footer>
  );
}
