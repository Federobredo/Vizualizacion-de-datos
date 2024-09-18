import React from 'react';

const SobrioTemplate = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="py-6 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">ROBREDO FEDERICO</div>
            <div className="flex space-x-8 text-sm">
              <a href="#top10" className="hover:underline">Lugar 1</a>
              <a href="#serie-pelicula" className="hover:underline">Lugar 2</a>
              <a href="#generos" className="hover:underline">Lugar 3</a>
              <a href="#evolucion" className="hover:underline">Lugar 4</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-8">
          Peliculas y series mejor valoradas<br />
        </h1>

        {/* Top 10 de las más valoradas */}
        <div id="top10" className="w-full h-96 rounded-lg overflow-hidden mb-12">
          <iframe
            title="Top 10 de las más valoradas"
            aria-label="Gráfico de puntos"
            id="datawrapper-chart-AaI2X"
            src="https://datawrapper.dwcdn.net/AaI2X/5/"
            style={{ width: '100%', height: '100%', border: 'none' }}
            data-external="1"
          ></iframe>
          <script type="text/javascript">
            {`
              !function(){"use strict";window.addEventListener("message",(function(a){
                if(void 0!==a.data["datawrapper-height"]){
                  var e=document.querySelectorAll("iframe");
                  for(var t in a.data["datawrapper-height"])
                  for(var r=0;r<e.length;r++)
                  if(e[r].contentWindow===a.source){
                    var i=a.data["datawrapper-height"][t]+"px";
                    e[r].style.height=i}}}))}();
            `}
          </script>
        </div>

        {/* Relación entre serie y película */}
        <div id="serie-pelicula" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-light mb-4">Relación entre serie y película</h2>
            <p className="mb-4">La relación entre la cantidad de series y películas más valoradas refleja tendencias actuales en el entretenimiento.</p>
            <p>Las series, impulsadas por el auge de plataformas de streaming, ofrecen tramas más largas y detalladas, lo que atrae a los espectadores que buscan mayor profundidad.</p>
            <p>En cambio, las películas, aunque más concentradas, suelen ser menos numerosas en estas listas debido a su naturaleza autoconclusiva y el creciente enfoque en las series de alta calidad.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="bg-gray-200 rounded p-4" style={{ minHeight: '564px' }}>
              <iframe
                title="¿Series o películas?"
                aria-label="Donut Chart"
                id="datawrapper-chart-chXmB"
                src="https://datawrapper.dwcdn.net/chXmB/2/"
                scrolling="no"
                frameBorder="0"
                style={{ width: '100%', height: '564px', border: 'none' }}
                data-external="1"
              ></iframe>
              <script type="text/javascript">
                {`
                  !function(){"use strict";window.addEventListener("message",(function(a){
                    if(void 0!==a.data["datawrapper-height"]){
                      var e=document.querySelectorAll("iframe");
                      for(var t in a.data["datawrapper-height"])
                      for(var r=0;r<e.length;r++)
                      if(e[r].contentWindow===a.source){
                        var i=a.data["datawrapper-height"][t]+"px";
                        e[r].style.height=i}}}))}();
                `}
              </script>
            </div>
          </div>
        </div>

        {/* Géneros mejor valorados */}
        <div id="generos" className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-light mb-6">Géneros mejor valorados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">La cantidad de géneros mejor valorados en la tabla refleja las preferencias de la audiencia y las tendencias de producción. Algunos géneros, como el drama o la acción, tienden a ser más populares porque abordan temas universales y ofrecen emociones intensas, lo que genera mayor conexión con los espectadores.</p>
              <p>Otros géneros, como la ciencia ficción o el romance, aunque más de nicho, atraen audiencias específicas muy comprometidas. En resumen, la cantidad de géneros mejor valorados varía según la capacidad de cada uno para captar la atención y generar experiencias memorables.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <iframe
                title="Géneros más valorados"
                aria-label="Gráfico de barras"
                id="datawrapper-chart-0nixf"
                src="https://datawrapper.dwcdn.net/0nixf/1/"
                scrolling="no"
                frameBorder="0"
                style={{ width: '100%', height: '353px', border: 'none' }}
                data-external="1"
              ></iframe>
              <script type="text/javascript">
                {`
                  !function(){"use strict";window.addEventListener("message",(function(a){
                    if(void 0!==a.data["datawrapper-height"]){
                      var e=document.querySelectorAll("iframe");
                      for(var t in a.data["datawrapper-height"])
                      for(var r=0;r<e.length;r++)
                      if(e[r].contentWindow===a.source){
                        var i=a.data["datawrapper-height"][t]+"px";
                        e[r].style.height=i}}}))}();
                `}
              </script>
            </div>
          </div>
        </div>

        {/* Evolución de las valoraciones */}
        <div id="evolucion" className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-light mb-6">Evolución de las valoraciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">Las valoraciones de películas y series han variado a lo largo de los años debido a cambios en las tendencias culturales, avances tecnológicos y el surgimiento de nuevas plataformas de distribución. En las primeras décadas, el cine dominaba las valoraciones, pero con el auge de las series en la era del streaming, estas han ganado terreno.</p>
              <p>Además, la evolución en los gustos de la audiencia ha generado que producciones más diversas y complejas reciban mejores críticas. También ha influido la democratización de la crítica, con plataformas como IMDb o Rotten Tomatoes, donde el público tiene más voz.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <iframe
                title="Valoraciones a lo largo de los años"
                aria-label="Scatter Plot"
                id="datawrapper-chart-4bhYP"
                src="https://datawrapper.dwcdn.net/4bhYP/3/"
                scrolling="no"
                frameBorder="0"
                style={{ width: '100%', height: '390px', border: 'none' }}
                data-external="1"
              ></iframe>
              <script type="text/javascript">
                {`
                  !function(){"use strict";window.addEventListener("message",(function(a){
                    if(void 0!==a.data["datawrapper-height"]){
                      var e=document.querySelectorAll("iframe");
                      for(var t in a.data["datawrapper-height"])
                      for(var r=0;r<e.length;r++)
                      if(e[r].contentWindow===a.source){
                        var i=a.data["datawrapper-height"][t]+"px";
                        e[r].style.height=i}}}))}();
                `}
              </script>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500">
          <p>&copy; 2024 Visualización De Datos. UTDT . Parcial.</p>
        </div>
      </footer>
    </div>
  );
};

export default SobrioTemplate;
