import React from "react";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../common/Rating";

const VolunteerCard = ({ volunteer }) => {
  return (
    <div>
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
                    <div>{volunteer?.name}</div>
                    <div className="text-secondary">{volunteer?.email}</div>
                    <div>
                      <Rating rating={volunteer?.rating} />
                    </div>
                  </div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="d-flex justify-content-between align-items-center border-bottom border-secondary"
                >
                  <div>Phone Number : </div>
                  <div>{volunteer?.phone_no}</div>
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
                  <div>{volunteer?.dob}</div>
                </Stack>
                <Stack direction="vertical">
                  <div>Description : </div>
                  <div className="text-white-50">{volunteer?.description}</div>
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