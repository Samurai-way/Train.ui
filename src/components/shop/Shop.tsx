import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { fetchTrains } from '../../api/trainApi';
import { Train } from '../modals/Train';

interface Train {
    fromPlace: string;
    toPlace: string;
    departureTime: string;
    availablePlaces: number;
    id: number;
}

interface TrainInfo extends Omit<Train, 'id'> {}

export const Shop: React.FC = () => {
    const [createTrainVisible, setCreateTrainVisible] = useState<boolean>(false);
    const [selectedTrains, setSelectedTrains] = useState<Train[]>([]);
    const [fromPlace, setFromPlace] = useState<string>('');
    const [toPlace, setToPlace] = useState<string>('');

    const findTrain = async (): Promise<void> => {
        const data: TrainInfo[] = await fetchTrains(fromPlace, toPlace);
        setSelectedTrains(data.map((trainInfo: TrainInfo) => ({ ...trainInfo, id: Math.random() })));
    };

    const normalDate = (oldDate: string): string => {
        const newDate = `${oldDate.slice(6, 8)}.${oldDate.slice(4, 6)}.${oldDate.slice(0, 4)}`;
        return newDate;
    };

    return (
        <Container>
            <Button variant="outline-dark" className="md-4 p-2" onClick={() => setCreateTrainVisible(true)}>
                Створити рейс
            </Button>
            <Form className="d-flex flex-column">
                <Row>
                    <Form.Control
                        className="mt-3"
                        placeholder="Звідки"
                        value={fromPlace}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFromPlace(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Куди"
                        value={toPlace}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setToPlace(e.target.value)}
                    />
                    <Button variant="outline-dark" className="md-4 p-2" onClick={() => findTrain()}>
                        Пошук потрібного рейсу
                    </Button>
                </Row>
            </Form>
            <Train show={createTrainVisible} onHide={() => setCreateTrainVisible(false)} />
            <div>
                <h3>Список потрібних вам потягів</h3>
                {selectedTrains.map((train: Train) => (
                    <div key={train.id}>
                        <p>{`${train.fromPlace} - ${train.toPlace}`}</p>
                        <p>{`Дата відправлення: ${normalDate(train.departureTime)}`}</p>
                        <p>{`Вільних місць: ${train.availablePlaces}`}</p>
                    </div>
                ))}
            </div>
        </Container>
    );
};
