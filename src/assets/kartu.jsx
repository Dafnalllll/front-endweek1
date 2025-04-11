import React from "react";
import Dafa from "./Dafa.jpg";
import "./kartu.css";

function Card() {
    return (
        <div className="container">
            <div className="card">
                <h5>klik dibawah sini</h5>
                <img src={Dafa} alt="Dafa" className="card-img-top" />
                <h2>Rizki Dafa Naldi</h2>
                <p>
                    Saya adalah mahasiswa yang sedang menempuh pendidikan di Universitas Andalas, Fakultas Teknologi Informasi Jurusan Teknik Komputer. Saya memiliki ketertarikan dalam bidang pemrograman dan pengembangan website khususnya di bagian front-end dan juga dalam bidang Machine Learning.
                </p>
            </div>
        </div>
    );
}

export default Kartu;
