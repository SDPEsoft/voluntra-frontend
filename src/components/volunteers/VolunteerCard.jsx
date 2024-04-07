import React from "react";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../common/Rating";
import { format } from "date-fns";

const VolunteerCard = ({ volunteer }) => {
  return (
    <div className=" h-100">
      <Link
        to={`/volunteers/${volunteer?.id}`}
        className="text-decoration-none"
      >
        <Card bg="dark" text="white" style={{ height: "100%" }}>
          <Card.Body>
            <Card.Text className="">
              <Stack direction="vertical" gap={1}>
                <Stack direction="horizontal" gap={3} className="pb-2">
                  <img
                    src={
                      volunteer?.logo_url ||
                      "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    }
                    class="rounded-circle"
                    width={80}
                    alt="Avatar"
                  />
                  <div>
                    <div>{volunteer?.username}</div>
                    <div className="text-secondary">{volunteer?.email}</div>
                    <div>
                      <Rating id={volunteer?.id} />
                    </div>
                  </div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Phone Number : </div>
                  <div>{volunteer?.phoneno}</div>
                </Stack>
                <Stack
                  direction="vertical"
                  className="border-bottom border-secondary"
                >
                  <div>Address : </div>
                  <div> {volunteer?.address}</div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>DOB : </div>
                  <div>{volunteer?.dob && format(volunteer?.dob,"dd/MM/yyyy")}</div>
                </Stack>
                <Stack direction="vertical">
                  <div>Interests : </div>
                  <div className="text-white-50">{volunteer?.interests}</div>
                </Stack>
                <Stack direction="vertical">
                  <div>Abilities : </div>
                  <div className="text-white-50">{volunteer?.abilities}</div>
                </Stack>
                <Stack direction="vertical">
                  <div>Talents : </div>
                  <div className="text-white-50">{volunteer?.talents}</div>
                </Stack>
              </Stack>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default VolunteerCard;
