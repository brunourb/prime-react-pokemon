import React, { FC } from 'react';
import styles from './PokemonEditForm.module.css';

interface PokemonEditFormProps {}

const PokemonEditForm: FC<PokemonEditFormProps> = () => (
  <div className={styles.PokemonEditForm} data-testid="PokemonEditForm">
    PokemonEditForm Component
  </div>
);

export default PokemonEditForm;
