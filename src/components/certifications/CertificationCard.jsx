const CertificationCard = ({ cert }) => {
  return (
    <article
      className="
		  grid grid-cols-1 items-center gap-4 rounded-2xl p-5 shadow-md
		  md:grid-cols-[88px,1fr]
		  bg-softWhite text-textPrimary
		  animate-fade-in
		"
    >
      <div className="flex items-center justify-center">
        {cert.badgeSrc ? (
          <img
            src={`${process.env.PUBLIC_URL}/${cert.badgeSrc}`}
            alt={`${cert.title} badge`}
            className="h-20 w-20 object-contain md:h-[88px] md:w-[88px]"
            loading="lazy"
          />
        ) : (
          <div className="h-20 w-20 rounded-xl bg-secondary" />
        )}
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-semibold md:text-xl text-textPrimary">
          {cert.title}
        </h3>
        <p className="text-sm opacity-90 md:text-base text-textSecondary">
          <span className="font-medium text-textPrimary">{cert.issuer}</span>
          {cert.issueDate ? ` • Issued ${cert.issueDate}` : null}
        </p>

        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block text-sm underline text-primary hover:opacity-90"
          >
            View credential
          </a>
        )}
      </div>
    </article>
  );
};

export default CertificationCard;
