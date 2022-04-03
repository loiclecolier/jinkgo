import React from 'react'
import './Valeurs.css'

export default function Valeurs() {

  return (
    <div id="valeurs">
      <div className="column-valeurs-1">
        <div className="container-performance">
          <div className="valeurs-performance">
            <h2>Performance</h2>
            <p><span>Intégrer</span> les besoins d’une organisation, la gestion des aspects qualité et environnement, la sécurité des équipements et la prévention et le bien-être des travailleurs au cœur de l’entreprise et en faire de réels leviers pour augmenter les performances de l’entreprise et la rendre pérenne et réactive.</p>
          </div>
        </div>
        <div className="container-experience">
          <div className="valeurs-experience">
            <h2>Expérience</h2>
            <p><span>Apporter</span> les ressources nécessaires, l’expérience de terrain et les compétences dans des domaines spécifiques de la sécurité, la prévention, l’environnement et la qualité.</p>
          </div>
        </div>
      </div>
      <div className="column-valeurs-2">
        <div className="container-fiabilite">
          <div className="valeurs-fiabilite">
            <h2>Fiabilité</h2>
            <p><span>Être</span> un partenaire fiable et réactif pour accompagner les changements et mettre en œuvre pratiquement vos obligations légales ou objectifs de certification.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
