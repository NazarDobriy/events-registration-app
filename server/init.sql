CREATE TABLE IF NOT EXISTS "Event" (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    description TEXT NOT NULL,
    "eventDate" TIMESTAMP NOT NULL,
    organizer VARCHAR(256) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO "Event" (title, description, "eventDate", organizer) VALUES
('London', 'London party', '2023-11-10', 'Buckingham Palace'),
('New York City', 'NYC Summer Bash', '2024-08-15', 'Times Square Events'),
('Tokyo', 'Tokyo Neon Lights Festival', '2024-10-10', 'Shinjuku Productions'),
('Sydney', 'Harbor Extravaganza', '2024-11-05', 'Opera House Events'),
('Rio de Janeiro', 'Carnival Celebration', '2024-12-31', 'Samba Street Entertainment'),
('Dubai', 'Desert Oasis Gala', '2025-01-25', 'Burj Khalifa Group'),
('Los Angeles', 'Hollywood Hills Soiree', '2025-02-14', 'Beverly Hills Events'),
('Rome', 'Roman Colosseum Feast', '2025-03-20', 'Vatican City Productions'),
('Berlin', 'Berlin Wall Bash', '2025-04-10', 'Brandenburg Gate Entertainment'),
('Kyiv', 'Kyiv Night Lights', '2024-06-15', 'Maidan Square Events'),
('Paris', 'Eiffel Tower Light Show', '2025-05-25', 'Champs-Elysees Productions'),
('Bangkok', 'Bangkok Riverside Celebration', '2024-07-30', 'Chao Phraya Events'),
('Toronto', 'CN Tower Light Extravaganza', '2024-08-20', 'Downtown Toronto Events'),
('Singapore', 'Marina Bay Sands Spectacular', '2024-12-15', 'Merlion Park Productions'),
('Mumbai', 'Gateway of India Fest', '2025-01-10', 'Colaba Events'),
('Istanbul', 'Bosphorus Bridge Bash', '2025-02-28', 'Sultanahmet Events'),
('Hong Kong', 'Victoria Harbour Spectacle', '2024-11-25', 'Central District Productions'),
('Barcelona', 'La Sagrada Familia Celebration', '2025-04-05', 'Gaudi Events');
