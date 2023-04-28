import React from 'react';
import styles from './Documents.module.scss';
import bee3 from '../../../assets/images/bee3.png';
import doc1 from '../../../assets/images/doc1.png';
import doc2 from '../../../assets/images/doc2.png';
import doc3 from '../../../assets/images/doc3.png';

const Documents = () => {
    return (
        <div>
            <div className={styles.documents}>
                <div className={styles.documents__title}>
                    <h1>Документы</h1>
                </div>
                <div className={styles.documents__bee}>
                    <img src={bee3} />
                </div>
                <div className={styles.documents__text}>
                    <h2>
                        Характеристики нашей продукции подтверждены данными
                        Федеральной Государственной информационной системы в
                        области ветеринарии ВЕТис - "Меркурий"
                        (Россельхознадзор). Каждая пчелиная семья КФХ
                        Виноградовых имеет индивидуальное клеймо национальной
                        автоматизированной системы учёта и регистрации животных
                        REG AGRO.
                    </h2>
                </div>

                <div className={styles.documents__docs}>
                    <img src={doc1} />
                    <img src={doc2} />
                    <img src={doc3} />
                </div>
            </div>
        </div>
    );
};

export default Documents;
