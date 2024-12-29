import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { breakpoints, emailRegex, passwordRegex } from "../../utils";
import Label from "../Label";
import InputField from "./InputField";
import edit from "../../assets/edit.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { updateImage, updateState } from "../../store/userProfileSlice";
import { addCard, deleteCard } from "../../store/notificationsSlice";
import { MoonLoader } from "react-spinners";

type State = {
  name: { value: string; error: string };
  userName: { value: string; error: string };
  email: { value: string; error: string };
  password: { value: string; error: string };
  dob: { value: string; error: string };
  presentAddress: { value: string; error: string };
  permanentAddress: { value: string; error: string };
  city: { value: string; error: string };
  postalCode: { value: number; error: string };
  country: { value: string; error: string };
  img: { value: string; updating: boolean };
  loading: boolean;
  editing: boolean;
};

function UserProfile() {
  const { userData } = useSelector((state: RootState) => state.userProfile);

  const dispatch = useDispatch();

  const [state, setState] = useState<State>({
    name: { value: "", error: "" },
    userName: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    dob: { value: "", error: "" },
    presentAddress: { value: "", error: "" },
    permanentAddress: { value: "", error: "" },
    city: { value: "", error: "" },
    postalCode: { value: 0, error: "" },
    country: { value: "", error: "" },
    loading: false,
    editing: false,
    img: { value: "", updating: false },
  });

  const handleAddNotificationCard = (
    type: "success" | "error",
    msg: string
  ) => {
    const id = Date.now();

    dispatch(
      addCard({
        msg: msg,
        type: type,
        id,
      })
    );

    setTimeout(() => {
      dispatch(deleteCard(id));
    }, 5000);
  };

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      name: { ...prev.name, value: userData.name },
      userName: { ...prev.userName, value: userData.userName },
      email: { ...prev.email, value: userData.email },
      password: { ...prev.password, value: userData.password },
      dob: { ...prev.dob, value: userData.dob },
      presentAddress: {
        ...prev.presentAddress,
        value: userData.presentAddress,
      },
      permanentAddress: {
        ...prev.permanentAddress,
        value: userData.permanentAddress,
      },
      city: { ...prev.city, value: userData.city },
      postalCode: { ...prev.postalCode, value: userData.postalCode },
      country: { ...prev.country, value: userData.country },
      img: { ...prev.img, value: userData.img },
    }));
  }, [userData]);

  const handleSave = () => {
    if (state.loading) {
      return;
    }

    if (!state.name.value) {
      setState((prev) => ({
        ...prev,
        name: { ...prev.name, error: "Name required" },
      }));
      return;
    } else {
      setState((prev) => ({ ...prev, name: { ...prev.name, error: "" } }));
    }

    if (!state.userName.value) {
      setState((prev) => ({
        ...prev,
        userName: { ...prev.userName, error: "Username required" },
      }));
      return;
    } else {
      setState((prev) => ({
        ...prev,
        userName: { ...prev.userName, error: "" },
      }));
    }

    if (!state.email.value) {
      setState((prev) => ({
        ...prev,
        email: { ...prev.email, error: "Email required" },
      }));
      return;
    } else {
      if (!emailRegex.test(state.email.value)) {
        setState((prev) => ({
          ...prev,
          email: { ...prev.email, error: "Invalid email" },
        }));
        return;
      } else {
        setState((prev) => ({ ...prev, email: { ...prev.email, error: "" } }));
      }
    }

    if (!state.password.value) {
      setState((prev) => ({
        ...prev,
        password: { ...prev.password, error: "Password required" },
      }));
      return;
    } else {
      if (!passwordRegex.test(state.password.value)) {
        setState((prev) => ({
          ...prev,
          password: {
            ...prev.password,
            error:
              "Password must be 8+ characters, include a letter, number, and special character.",
          },
        }));
        return;
      } else {
        setState((prev) => ({
          ...prev,
          password: { ...prev.password, error: "" },
        }));
      }
    }

    if (!state.dob.value) {
      setState((prev) => ({
        ...prev,
        dob: { ...prev.dob, error: "Date of birth required" },
      }));
      return;
    } else {
      setState((prev) => ({ ...prev, dob: { ...prev.dob, error: "" } }));
    }

    if (!state.presentAddress.value) {
      setState((prev) => ({
        ...prev,
        presentAddress: { ...prev.presentAddress, error: "Address required" },
      }));
      return;
    } else {
      setState((prev) => ({
        ...prev,
        presentAddress: { ...prev.presentAddress, error: "" },
      }));
    }

    if (!state.permanentAddress.value) {
      setState((prev) => ({
        ...prev,
        permanentAddress: {
          ...prev.permanentAddress,
          error: "Address required",
        },
      }));
      return;
    } else {
      setState((prev) => ({
        ...prev,
        permanentAddress: { ...prev.permanentAddress, error: "" },
      }));
    }

    if (!state.city.value) {
      setState((prev) => ({
        ...prev,
        city: { ...prev.city, error: "City name required" },
      }));
      return;
    } else {
      setState((prev) => ({ ...prev, city: { ...prev.city, error: "" } }));
    }

    if (!state.postalCode.value) {
      setState((prev) => ({
        ...prev,
        postalCode: { ...prev.postalCode, error: "Postal code required" },
      }));
      return;
    } else {
      setState((prev) => ({
        ...prev,
        postalCode: { ...prev.postalCode, error: "" },
      }));
    }

    if (!state.country.value) {
      setState((prev) => ({
        ...prev,
        country: { ...prev.country, error: "Country name required" },
      }));
      return;
    } else {
      setState((prev) => ({
        ...prev,
        country: { ...prev.country, error: "" },
      }));
    }

    const data = {
      userData: {
        name: state.name.value,
        userName: state.userName.value,
        email: state.email.value,
        password: state.password.value,
        dob: state.dob.value,
        presentAddress: state.presentAddress.value,
        permanentAddress: state.permanentAddress.value,
        city: state.city.value,
        postalCode: state.postalCode.value,
        country: state.country.value,
        img: state.img.value,
      },
    };

    setState((prev) => ({ ...prev, loading: true }));

    setTimeout(() => {
      dispatch(updateState(data));
      setState((prev) => ({ ...prev, loading: false, editing: false }));
      handleAddNotificationCard("success", "Profile updated succesfully !");
    }, 1500);
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setState((prev) => ({ ...prev, img: { ...prev.img, updating: true } }));
        setTimeout(() => {
          dispatch(updateImage(reader.result as string));
          setState((prev) => ({
            ...prev,
            img: { value: reader.result as string, updating: false },
          }));
        }, 1500);
        handleAddNotificationCard(
          "success",
          "Profile picture updated successfully !"
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    if (state.img.updating) {
      return;
    }
    document.getElementById("fileInput")?.click();
  };

  return (
    <>
      <Setting>
        <UserImgCon>
          <div
            style={{
              width: "90px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <img
              alt="user"
              src={state.img.value}
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <>
              {state.img.updating ? (
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "black",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    cursor: "pointer",
                    borderRadius: "50%",
                  }}
                >
                  <MoonLoader size={15} color="white" />
                </div>
              ) : (
                <img
                  alt="edit"
                  src={edit}
                  style={{
                    width: "30px",
                    height: "30px",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    cursor: "pointer",
                  }}
                  onClick={triggerFileInput}
                />
              )}
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </>
          </div>
        </UserImgCon>
        <Grid>
          <InputField
            error={state.name.error}
            disabled={!state.editing}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                name: { ...prev.name, value: e },
              }))
            }
            value={state.name.value}
            title="Your Name"
            type="text"
          />
          <InputField
            disabled={!state.editing}
            error={state.userName.error}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                userName: { ...prev.userName, value: e },
              }))
            }
            value={state.userName.value}
            title="Username"
            type="text"
          />
          <InputField
            error={state.email.error}
            disabled={!state.editing}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                email: { ...prev.email, value: e },
              }))
            }
            value={state.email.value}
            title="Eamil"
            type="text"
          />
          <InputField
            disabled={!state.editing}
            error={state.password.error}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                password: { ...prev.password, value: e },
              }))
            }
            value={state.password.value}
            title="Password"
            type="password"
          />
          <InputField
            disabled={!state.editing}
            error={state.dob.error}
            onChange={(e) =>
              setState((prev) => ({ ...prev, dob: { ...prev.dob, value: e } }))
            }
            value={state.dob.value}
            title="Date of Birth"
            type="date"
          />
          <InputField
            disabled={!state.editing}
            error={state.presentAddress.error}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                presentAddress: { ...prev.presentAddress, value: e },
              }))
            }
            value={state.presentAddress.value}
            title="Present Address"
            type="text"
          />
          <InputField
            disabled={!state.editing}
            error={state.permanentAddress.error}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                permanentAddress: { ...prev.permanentAddress, value: e },
              }))
            }
            value={state.permanentAddress.value}
            title="Permanent Address"
            type="text"
          />
          <InputField
            error={state.city.error}
            disabled={!state.editing}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                city: { ...prev.city, value: e },
              }))
            }
            value={state.city.value}
            title="City"
            type="text"
          />
          <InputField
            disabled={!state.editing}
            error={state.postalCode.error}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                postalCode: {
                  ...prev.postalCode,
                  value: isNaN(parseInt(e)) ? 0 : parseInt(e),
                },
              }))
            }
            value={state.postalCode.value.toString()}
            title="Postal Code"
            type="text"
          />
          <InputField
            error={state.country.error}
            disabled={!state.editing}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                country: { ...prev.country, value: e },
              }))
            }
            value={state.country.value}
            title="Country"
            type="text"
          />
        </Grid>
      </Setting>
      {state.editing ? (
        <div style={{ display: "flex", gap: "1rem" }}>
          {!state.loading && (
            <Button
              onClick={() => setState((prev) => ({ ...prev, editing: false }))}
            >
              <Label weight={500} size="18px" color="white">
                Cancel
              </Label>
            </Button>
          )}
          <Button
            style={{
              marginLeft: state.loading ? "auto" : "0px",
              backgroundColor: "#232323",
            }}
            onClick={handleSave}
          >
            {state.loading ? (
              <MoonLoader color="white" size={20} />
            ) : (
              <Label weight={500} size="18px" color="white">
                Save
              </Label>
            )}
          </Button>
        </div>
      ) : (
        <Button
          style={{
            backgroundColor: "#232323",
          }}
          onClick={() => setState((prev) => ({ ...prev, editing: true }))}
        >
          <Label weight={500} size="18px" color="white">
            Edit
          </Label>
        </Button>
      )}
    </>
  );
}

const Setting = styled.div`
  width: 100%;
  gap: 2rem;
  max-height: 88%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const UserImgCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.tablet}) {
    width: 15%;
    align-items: start;
  }
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 22px;
  column-gap: 22px;
  place-items: center;
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Button = styled.div`
  width: 190px;
  height: 50px;
  margin-left: auto;
  margin-top: 40px;
  background-color: red;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 4px 4px 18px -2px #e7e4e8cc;
  transition: transform 0.2s, box-shadow 0.3s;

  &:hover {
    box-shadow: 6px 6px 20px -1px #dcdce1;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 2px 2px 12px -1px #b0afaf;
  }
`;

export default UserProfile;
