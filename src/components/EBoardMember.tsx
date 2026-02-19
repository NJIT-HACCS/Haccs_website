import React from "react";

interface EBoardMemberProps {
  name: string;
  role: string;
  major: string;
  year: string;
  imageUrl: string;
}

const EBoardMember: React.FC<EBoardMemberProps> = ({
  name,
  role,
  major,
  year,
  imageUrl,
}) => {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative mb-4 overflow-hidden rounded-2xl">
        <img
          src={imageUrl}
          alt={name}
          className="h-64 w-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground">
        {role}
      </h3>
      <p className="text-sm text-muted-foreground">{name}</p>
      <p className="text-xs text-muted-foreground/70">
        {major} • {year}
      </p>
    </div>
  );
};

export default React.memo(EBoardMember);
