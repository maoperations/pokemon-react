import React from "react";
import { ProgressBar, Tab, Tabs } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { TYPES_COLOR } from "../../constants/colors";

const Modals = ({ show, data, onClose }) => {
  if (!data) return null;

  const color = TYPES_COLOR[data.types[0].type.name];

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Body style={{ backgroundColor: color }}>
        <div className="flex items-center justify-between">
          <svg
            width="25px"
            height="25px"
            viewBox="0 -6.5 38 38"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000000"
            stroke="#000000"
            stroke-width="0"
            onClick={onClose}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>{" "}
            <title>left-arrow</title> <desc>Created with Sketch.</desc>{" "}
            <g
              id="SVGRepoEditor"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g
                id="SVGRepoEditor"
                transform="translate(-1641.000000, -158.000000)"
                fill="#ffffff"
                fill-rule="nonzero"
              >
                {" "}
                <g
                  id="SVGRepoEditor"
                  transform="translate(1350.000000, 120.000000)"
                >
                  {" "}
                  <path
                    d="M317.812138,38.5802109 L328.325224,49.0042713 L328.41312,49.0858421 C328.764883,49.4346574 328.96954,49.8946897 329,50.4382227 L328.998248,50.6209428 C328.97273,51.0514917 328.80819,51.4628128 328.48394,51.8313977 L328.36126,51.9580208 L317.812138,62.4197891 C317.031988,63.1934036 315.770571,63.1934036 314.990421,62.4197891 C314.205605,61.6415481 314.205605,60.3762573 314.990358,59.5980789 L322.274264,52.3739093 L292.99947,52.3746291 C291.897068,52.3746291 291,51.4850764 291,50.3835318 C291,49.2819872 291.897068,48.3924345 292.999445,48.3924345 L322.039203,48.3917152 L314.990421,41.4019837 C314.205605,40.6237427 314.205605,39.3584519 314.990421,38.5802109 C315.770571,37.8065964 317.031988,37.8065964 317.812138,38.5802109 Z"
                    id="SVGRepoEditor"
                    transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "
                  ></path>{" "}
                </g>
              </g>
            </g>
          </svg>
          <p className="text-2xl text-white font-bold capitalize">
            {data.name}
          </p>
          <p className="text-xl text-white font-bold capitalize">#{data.id}</p>
        </div>

        <div className="flex items-center justify-center gap-2 mt-3">
          {data.types.map((type, idx) => (
            <div
              className="bg-[rgba(255,255,255,0.5)] text-white font-bold py-2 px-6 rounded-full capitalize"
              key={idx}
            >
              <p>{type.type.name}</p>
            </div>
          ))}
        </div>

        <img
          className="absolute mx-auto left-0 right-0 w-24 h-24 mt-3"
          src={data.sprites.other.dream_world.front_default}
        />
        <div className="bg-white rounded-2xl -mx-4 -mb-7 mt-24">
          <div className="py-5">
            <Tabs
              defaultActiveKey="about"
              id="uncontrolled-tab"
              className="mb-3 !border-b !border-b-gray-200 px-3"
            >
              <Tab eventKey="about" title="About">
                <div className="grid grid-cols-2 mx-3 gap-3">
                  <p>Species</p>
                  <div className="flex items-center gap-1">
                    {data.types.map((item, idx) => (
                      <p className="font-bold capitalize" key={idx}>
                        {item.type.name}
                      </p>
                    ))}
                  </div>
                  <p>Height</p>
                  <p className="font-bold capitalize">{data.height}cm</p>
                  <p>Weight</p>
                  <p className="font-bold capitalize">{data.weight}kg</p>
                  <p>Abilities</p>
                  <div className="flex items-center gap-1">
                    {data.abilities.map((item, idx) => (
                      <p className="font-bold capitalize" key={idx}>
                        {item.ability.name}
                      </p>
                    ))}
                  </div>
                </div>
              </Tab>
              <Tab eventKey="base-stats" title="Base Stats">
                <div className="mx-3">
                  <table class="table-auto">
                    <tbody>
                      {data.stats.map((stat) => (
                        <tr>
                          <td className="w-1/3 capitalize">{stat.stat.name}</td>
                          <td className="mx-10 px-3">{stat.base_stat}</td>
                          <td className="w-full">
                            <ProgressBar
                              now={60}
                              variant={
                                Number(stat.base_stat) < 50
                                  ? "danger"
                                  : "success"
                              }
                              className="!h-2"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Tab>
              <Tab eventKey="evolution" title="Evolution">
                <p>Hello3</p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Modals;
