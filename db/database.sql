CREATE DATABASE IF NOT EXISTS dialogs;
CREATE TABLE Texts
(
    id            INT(11) NOT NULL auto_increment ,
    text          VARCHAR(1000) NOT NULL ,
    dialog_id      INT(11) NOT NULL,
    text_order      INT(11) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO Texts (text, dialog_id, text_order)
VALUES
    ('Winter is coming', 1, 1),
    ('A Lannister always pays his debts', 1, 2),
    ('When you play the game of thrones, you win or you die', 1, 3),
    ('Valar Morghulis', 2, 1),
    ('The night is dark and full of terrors', 2, 2),
    ('Chaos isn’t a pit. Chaos is a ladder', 2, 3),
    ('A girl has no name', 2, 4),
    ('Hold the door', 3, 1),
    ('The things I do for love', 3, 2),
    ('Dracarys', 3, 3);