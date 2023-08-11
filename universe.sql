--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: black_hole; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.black_hole (
    name character varying(30) NOT NULL,
    black_hole_id integer NOT NULL,
    constellation character varying(30)
);


ALTER TABLE public.black_hole OWNER TO freecodecamp;

--
-- Name: black_hole_black_hole_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.black_hole_black_hole_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.black_hole_black_hole_id_seq OWNER TO freecodecamp;

--
-- Name: black_hole_black_hole_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.black_hole_black_hole_id_seq OWNED BY public.black_hole.black_hole_id;


--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(30) NOT NULL,
    description text,
    mpc_from_earth numeric(6,5),
    diameter_ly integer
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(30) NOT NULL,
    planet_id integer,
    diameter_km numeric(5,1),
    billions_of_years numeric(3,1)
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(30) NOT NULL,
    billions_of_years numeric(4,3),
    diameter_km integer,
    density_kg_m3 integer,
    has_life boolean,
    has_rings boolean,
    star_id integer,
    gravity numeric(4,2)
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(30),
    galaxy_id integer NOT NULL,
    constellation text,
    ly_from_earth numeric(14,7)
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: black_hole black_hole_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.black_hole ALTER COLUMN black_hole_id SET DEFAULT nextval('public.black_hole_black_hole_id_seq'::regclass);


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: black_hole; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.black_hole VALUES ('Cygnus X-1', 5, ' Cygnus');
INSERT INTO public.black_hole VALUES ('Sagittarius A*', 6, ' Sagittarius');
INSERT INTO public.black_hole VALUES ('Fornax', 7, ' Fornax');


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (4, 'Milky Way', 'Home galaxy of Earth', 0.00800, 87400);
INSERT INTO public.galaxy VALUES (5, 'Canis Major Dwarf', 'Satellite of Milky Way', 0.00800, NULL);
INSERT INTO public.galaxy VALUES (6, 'Draco II', 'Satellite of Milky Way', 0.02150, 120);
INSERT INTO public.galaxy VALUES (7, 'Tucuna III', 'Satellite of Milky Way that is being tidally disrupted', 0.02290, 220);
INSERT INTO public.galaxy VALUES (8, 'Segue I', 'Satellite of Milky Way', 0.02300, NULL);
INSERT INTO public.galaxy VALUES (9, 'Hydrus I', 'Satellite of Milky Way', 0.02760, 348);
INSERT INTO public.galaxy VALUES (10, 'Carina III', 'Satellite of Milky Way', 0.02780, 200);
INSERT INTO public.galaxy VALUES (11, 'Triangulum II', 'Satellite of Milky Way', 0.03000, NULL);
INSERT INTO public.galaxy VALUES (12, 'Reticulum II', 'Satellite of Milky Way', 0.03140, 378);
INSERT INTO public.galaxy VALUES (13, 'Segue II', 'Satellite of Milky Way', 0.03500, 220);
INSERT INTO public.galaxy VALUES (14, 'Carina II', 'Satellite of Milky Way', 0.03740, 590);
INSERT INTO public.galaxy VALUES (15, 'Willman I', 'Satellite of Milky Way', 0.03800, NULL);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'Moon', 14, 3475.0, 4.5);
INSERT INTO public.moon VALUES (2, 'Phobos', 15, 22.2, 4.5);
INSERT INTO public.moon VALUES (3, 'Deimos', 15, 12.4, 4.5);
INSERT INTO public.moon VALUES (4, 'Io', 16, 3643.2, 4.5);
INSERT INTO public.moon VALUES (5, 'Europa', 16, 3121.6, 4.5);
INSERT INTO public.moon VALUES (6, 'Ganymede', 16, 5262.4, 4.5);
INSERT INTO public.moon VALUES (7, 'Callisto', 16, 4820.6, 4.5);
INSERT INTO public.moon VALUES (8, 'Mimas', 17, 396.4, 4.5);
INSERT INTO public.moon VALUES (9, 'Enceladus', 17, 504.2, 4.5);
INSERT INTO public.moon VALUES (10, 'Tethys', 17, 1060.0, 4.5);
INSERT INTO public.moon VALUES (11, 'Dione', 17, 1122.8, 4.5);
INSERT INTO public.moon VALUES (12, 'Rhea', 17, 1527.6, 4.5);
INSERT INTO public.moon VALUES (13, 'Titan', 17, 5150.0, 4.5);
INSERT INTO public.moon VALUES (14, 'Hyperion', 17, 360.2, 4.5);
INSERT INTO public.moon VALUES (15, 'Lapetus', 17, 360.2, 4.5);
INSERT INTO public.moon VALUES (16, 'Phoebe', 17, 213.6, 4.5);
INSERT INTO public.moon VALUES (17, 'Miranda', 18, 472.0, 4.5);
INSERT INTO public.moon VALUES (18, 'Ariel', 18, 1157.8, 4.5);
INSERT INTO public.moon VALUES (19, 'Umbriel', 18, 1169.4, 4.5);
INSERT INTO public.moon VALUES (20, 'Titania', 18, 1577.8, 4.5);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (12, 'Mercury', 4.503, 4879, 5429, false, false, 13, 3.70);
INSERT INTO public.planet VALUES (13, 'Venus', 4.503, 12104, 5243, false, false, 13, 8.90);
INSERT INTO public.planet VALUES (14, 'Earth', 4.503, 12756, 5514, true, false, 13, 9.80);
INSERT INTO public.planet VALUES (15, 'Mars', 4.503, 6792, 3934, false, false, 13, 3.70);
INSERT INTO public.planet VALUES (16, 'Jupiter', 4.565, 142984, 1326, false, true, 13, 23.10);
INSERT INTO public.planet VALUES (17, 'Saturn', 4.543, 1205356, 687, false, true, 13, 9.00);
INSERT INTO public.planet VALUES (18, 'Uranus', 4.543, 51118, 1270, false, true, 13, 8.70);
INSERT INTO public.planet VALUES (19, 'Neptune', 4.543, 49528, 1638, false, true, 13, 11.00);
INSERT INTO public.planet VALUES (20, 'Proxima Centauri b', 4.850, 12800, 5515, false, false, 14, 9.00);
INSERT INTO public.planet VALUES (21, 'TRAPPIST-1 b', 7.600, 13818, 5515, false, false, 19, 9.81);
INSERT INTO public.planet VALUES (22, 'LHS 1140 B', 6.500, 17640, 5515, false, false, 20, 13.74);
INSERT INTO public.planet VALUES (23, 'Ross 128 b', 9.400, 12742, 5515, false, false, 21, 9.81);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (13, 'Sun', 4, 'NULL', 0.0000158);
INSERT INTO public.star VALUES (14, 'Proxima Centauri', 4, 'Centaurus', 4.2465000);
INSERT INTO public.star VALUES (15, 'Rigil Kentaurus', 4, 'Centaurus', 4.3441000);
INSERT INTO public.star VALUES (16, 'Toliman', 4, 'Centaurus', 4.3441000);
INSERT INTO public.star VALUES (17, 'Barnards Star', 4, 'Ophiucus', 5.9629000);
INSERT INTO public.star VALUES (18, 'Luhman 16', 4, 'Vela', 6.5029000);
INSERT INTO public.star VALUES (19, 'TRAPPIST-1', 4, 'Aquarius', 39.0000000);
INSERT INTO public.star VALUES (20, 'LHS 1140', 4, 'Cetus', 41.0000000);
INSERT INTO public.star VALUES (21, 'Ross 128', 4, 'Virgo', 11.0000000);


--
-- Name: black_hole_black_hole_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.black_hole_black_hole_id_seq', 7, true);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 15, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 20, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 23, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 21, true);


--
-- Name: black_hole black_hole_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.black_hole
    ADD CONSTRAINT black_hole_name_key UNIQUE (name);


--
-- Name: black_hole black_hole_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.black_hole
    ADD CONSTRAINT black_hole_pkey PRIMARY KEY (black_hole_id);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

