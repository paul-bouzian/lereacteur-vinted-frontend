import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from "../components/Publish/FileUpload";
import PublishInput from "../components/Publish/PublishInput";

function Publish() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSubmitLoading(true);

    const token = Cookies.get("token");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("city", location);
    formData.append("brand", brand.toUpperCase());
    formData.append("size", size.toUpperCase());
    formData.append("color", color);
    formData.append("newsLetter", newsLetter);
    formData.append("picture", file);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}offer/publish`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        },
      );

      setSubmitLoading(false);

      navigate("/offer/" + response.data._id);
    } catch (error) {
      setSubmitLoading(false);
      if (error.response.status === 400) {
        setErrorMessage("Veuillez remplir tous les champs");
      } else {
        setErrorMessage("Une erreur est survenue, veuillez réessayer");
      }
      console.log(error);
    }
  };

  return (
    <main className="bg-[#EBEDEE]">
      <section className="m-auto flex max-w-7xl flex-col px-4 pt-8">
        <h1 className="mb-6 text-2xl">Vends ton article</h1>
        <form
          className="flex flex-col items-center gap-3"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <FileUpload file={file} setFile={setFile} />
          <div className="formContainer">
            <PublishInput
              label={"Titre"}
              value={title}
              setValue={setTitle}
              placeholder={"ex: Chemise Sézane verte"}
              border={true}
            />

            <div className={`flex w-full justify-center py-6`}>
              <label className="flex-1">Décris ton article</label>
              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder={"ex: porté quelquefois, taille correctement"}
                className="flex-1 rounded border-b border-slate-300 p-1 outline-none"
              />
            </div>
          </div>

          <div className="formContainer">
            <PublishInput
              label={"Marque"}
              value={brand}
              setValue={setBrand}
              placeholder={"ex: Zara"}
              border={true}
            />
            <PublishInput
              label={"Taille"}
              value={size}
              setValue={setSize}
              placeholder={"ex: L / 40 / 12"}
              border={true}
            />
            <PublishInput
              label={"Couleur"}
              value={color}
              setValue={setColor}
              placeholder={"ex: Fushia"}
              border={true}
            />
            <PublishInput
              label={"Etat"}
              value={condition}
              setValue={setCondition}
              placeholder={"ex: Neuf avec étiquette"}
              border={true}
            />
            <PublishInput
              label={"Lieu"}
              value={location}
              setValue={setLocation}
              placeholder={"ex: Paris"}
            />
          </div>
          <div className="formContainer">
            <PublishInput
              label={"Prix"}
              value={price}
              setValue={setPrice}
              placeholder={"0,00 €"}
            />
            <div className="mb-4 flex w-full">
              <div className="flex-1"></div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={newsLetter}
                    onChange={(e) => {
                      setNewsLetter(e.target.checked);
                    }}
                    className="form-checkbox h-5 w-5 text-teal-600 hover:cursor-pointer"
                  />
                  <label className="ml-2">
                    Je suis intéressé(e) par les échanges
                  </label>
                </div>
              </div>
            </div>
          </div>
          <span>
            {errorMessage && (
              <div className="text-center text-red-500">{errorMessage}</div>
            )}
          </span>
          <div className="mt-4 flex w-full justify-end pb-14">
            <input
              type="submit"
              value={submitLoading ? "Chargement..." : "Ajouter"}
              className="rounded bg-teal-700 px-4 py-2 font-bold text-white hover:cursor-pointer hover:bg-teal-800"
            />
          </div>
        </form>
      </section>
    </main>
  );
}

export default Publish;
