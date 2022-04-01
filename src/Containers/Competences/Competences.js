import React, { useState } from 'react'
import './Competences.css'
import Technique from './card-technique.jpg'
import Orga from './card-orga.jpg'
import Humain from './card-humain.jpg'
import Reseaux from './card-reseaux.jpg'

export default function Competences() {

  const [toggleTechnique, setToggleTechnique] = useState(false);
  const [toggleOrga, setToggleOrga] = useState(false);
  const [toggleHumain, setToggleHumain] = useState(false);
  const [toggleReseaux, setToggleReseaux] = useState(false);
  const [toggleOverlay, setToggleOverlay] = useState(false);

  const toggleModalTechnique = () => {
      setToggleTechnique(!toggleTechnique);
      setToggleOverlay(!toggleOverlay);
  }
  const toggleModalOrga = () => {
      setToggleOrga(!toggleOrga);
      setToggleOverlay(!toggleOverlay);
  }
  const toggleModalHumain = () => {
      setToggleHumain(!toggleHumain);
      setToggleOverlay(!toggleOverlay);
  }
  const toggleModalReseaux = () => {
      setToggleReseaux(!toggleReseaux);
      setToggleOverlay(!toggleOverlay);
  }
  const closeAllModals = () => {
    setToggleTechnique(false);
    setToggleOrga(false);
    setToggleHumain(false);
    setToggleReseaux(false);
    setToggleOverlay(false);
  }

  return (
    <div id="competences">
      <div className="cards-competences">
        <div className="card-cpt card-technique" onClick={toggleModalTechnique}>
          <h2>Technique</h2>
          <p>En savoir plus...</p>
          <div className="card-overlay"></div>
        </div>
        <div className="card-cpt card-orga" onClick={toggleModalOrga}>
          <h2>Organisationnel</h2>
          <p>En savoir plus...</p>
          <div className="card-overlay"></div>
        </div>
        <div className="card-cpt card-humain" onClick={toggleModalHumain}>
          <h2>Humain</h2>
          <p>En savoir plus...</p>
          <div className="card-overlay"></div>
        </div>
        <div className="card-cpt card-reseaux" onClick={toggleModalReseaux}>
          <h2>Réseaux</h2>
          <p>En savoir plus...</p>
          <div className="card-overlay"></div>
        </div>
      </div>
      {toggleOverlay &&
        <div className="overlay" onClick={closeAllModals}></div>
      }
      {toggleTechnique &&
        <div className="modal-cpt modal-technique">
          <img src={Technique} alt="Ouvrier au travail" />
          <div className="modal-informations">
            <h2>Technique</h2>
            <ul>
              <li>Audit de conformité légale/terrain en sécurité et environnement</li>
              <li>Sécurité des process industriels – Analyses HAZOP,…</li>
              <li>Analyse des risques des postes de travail (inclus les risques psychosociaux, …)</li>
              <li>Analyse des risques incendie et suivi des projets de mise en conformité du matériel de détection et de secours</li>
              <li>Etudes règlementaires ATEX</li>
              <li>Conformité Directive Machines</li>
              <li>Statut SEVESO et règlementation pour les stockages de produits dangereux</li>
              <li>Plan d’amélioration des équipements et installations</li>
              <li>Support sécurité/environnement/qualité dans l’élaboration des projets et gestion des sous-traitants</li>
              <li>Elaboration des dossiers de demande de permis d’environnement, notice d’identification des dangersque</li>
            </ul>
          </div>
          <button className="close-modal" onClick={toggleModalTechnique}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#555555" color="#555555" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      }
      {toggleOrga &&
        <div className="modal-cpt modal-orga">
          <img src={Orga} alt="Employé qui prend des notes" />
          <div className="modal-informations">
            <h2>Organisationnel</h2>
            <ul>
              <li>Elaboration des procédures et outils spécifiques pour la gestion de la santé et la sécurité des travailleurs et la sécurité des process industriels (permis de travail, procédure alcool et drogues)</li>
              <li>Mise en œuvre des procédures pour l’obtention des certifications ISO 14001, OHSAS 18001, ISO 9001</li>
              <li>Définition des objectifs et indicateurs propres à l’organisation</li>
              <li>Elaboration des plans d’actions annuel et quinquennal</li>
              <li>Elaboration des plans d’actions avec hiérarchisation</li>
              <li>Priorisation des actions dans les organisations</li>
              <li>Définition des fonctions, R&amp;R des parties prenantes</li>
              <li>Mise en place du « Management of change »</li>
              <li>Audits des systèmes</li>
            </ul>
          </div>
          <button className="close-modal" onClick={toggleModalOrga}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#555555" color="#555555" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      }
      {toggleHumain &&
        <div className="modal-cpt modal-humain">
          <img src={Humain} alt="Employés qui travaillent ensemble" />
          <div className="modal-informations">
            <h2>Humain</h2>
            <ul>
              <li>Outils pour l’étude des facteurs humains d’une organisation Sécurité comportementale</li>
              <li>Changement des attitudes/mentalités</li>
              <li>Support à la ligne hiérarchique</li>
              <li>Identification des besoins en formations</li>
              <li>Rédaction des supports de formation adaptés au site et dispense des formations du personnel (VCA, risques des sous-traitants, …)</li>
              <li>Ergonomie des postes de travail</li>
              <li>Gestion des changements organisationnels, …</li>
              <li>Etude de la pénibilité au travail</li>
            </ul>
          </div>
          <button className="close-modal" onClick={toggleModalHumain}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#555555" color="#555555" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      }
      {toggleReseaux &&
        <div className="modal-cpt modal-reseaux">
          <img src={Reseaux} alt="Serrage de mains entre deux employés" />
          <div className="modal-informations">
            <h2>Réseaux</h2>
            <ul>
              <li>Accompagnement lors des audits groupes internationaux</li>
              <li>Support dans les relations avec les assurances, certificateurs, inspecteurs, SRI</li>
              <li>Accompagnement lors des réunions avec les autorités (DPC, DCRC, SPF Seveso, Cellule RAM, …), riverains, …</li>
              <li>Lien avec les fédérations d’entreprises (Agoria, Essencia, Phytofar, …)</li>
            </ul>
          </div>
          <button className="close-modal" onClick={toggleModalReseaux}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#555555" color="#555555" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      }
    </div>
  )
}
