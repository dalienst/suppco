"use client";
import React from "react";
import useUserId from "../useUserId";
import useAxiosAuth from "../useAxiosAuth";
import { getUser } from "@/services/accounts";
import { useQuery } from "@tanstack/react-query";

export function useFetchProfile() {
  const axios = useAxiosAuth();
  const userId = useUserId();

  return useQuery({
    queryKey: ["profile", userId],
    queryFn: () => getUser(userId, axios),
    enabled: !!userId,
  });
}
