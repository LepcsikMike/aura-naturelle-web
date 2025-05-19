
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-audrey-green-light/30 pt-20">
      <div className="text-center p-8">
        <h1 className="font-serif text-5xl md:text-6xl font-light text-audrey-earth-dark mb-6">
          404
        </h1>
        <p className="text-xl text-audrey-text mb-6">
          Lo sentimos, la página que buscas no existe
        </p>
        <Link 
          to="/" 
          className="btn-primary inline-block"
        >
          Volver a Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
